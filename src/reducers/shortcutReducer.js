import {
    EDIT_MENU_CLICKED,
    SHORTCUT_TAIL_CLICKED,
    ADD_SHORTCUT,
    UPDATE_SHORTCUT,
    REMOVE_SHORTCUT,
    ADD_TAG,
    REMOVE_TAG,
    FECTH_TAGS,
    CREATE_TAG,
    SEARCH_CLICKED,
    CLEAR_MODAL_PROPS,
    FILTER_BY_TAG,
    HANDLE_DROP,
    SHORTCUTS_FETCHED,
    TAGS_FETCHED, SHORTCUT_SELECTED, DELETE_SHORTCUTS, FAVOURITE_SHORTCUT, FETCH_FAVOURITES
} from "../constants/actionsConstants";
import {getShortcuts} from "../api/shortcuts-api";

var _ = require('lodash');


let tags = {
    "12": {
        "id": "12",
        "value": "spring"
    },
    "13": {
        "id": "13",
        "value": "spring"
    },
    "14": {
        "id": "14",
        "value": "spring"
    },
    "15": {
        "id": "15",
        "value": "spring"
    },
    /*"16": {
        "id": "12",
        "value": "spring"
    },
    "17": {
        "id": "13",
        "value": "spring"
    },
    "18": {
        "id": "14",
        "value": "spring"
    },
    "19": {
        "id": "15",
        "value": "spring"
    },
    "20": {
        "id": "13",
        "value": "spring"
    },
    "21": {
        "id": "14",
        "value": "spring"
    },
    "22": {
        "id": "15",
        "value": "spring"
    },
    "23": {
        "id": "15",
        "value": "spring"
    },
    "24": {
        "id": "13",
        "value": "spring"
    },
    "25": {
        "id": "14",
        "value": "spring"
    },
    "26": {
        "id": "15",
        "value": "spring"
    },"27": {
        "id": "12",
        "value": "spring"
    },
    "28": {
        "id": "13",
        "value": "spring"
    },
    "29": {
        "id": "14",
        "value": "spring"
    },
    "30": {
        "id": "15",
        "value": "spring"
    },*/


};

let shortcuts = {
    "123": {
        "id": "123",
        "name": "test",
        "url": "https://www.dailymotion.com/video/x7r6aem",
        "tags": []
    },
    "1234": {
        "id": "1234",
        "name": "test",
        "url": "https://www.dailymotion.com/video/x7r6aem",
        "tags": []
    },
    "1235": {
        "id": "1235",
        "name": "test",
        "url": "https://www.dailymotion.com/video/x7r6aem",
        "tags": []
    },
    "1236": {
        "id": "1236",
        "name": "test",
        "url": "https://www.dailymotion.com/video/x7r6aem",
        "tags": []
    }
}

const intialData = {
    shortcuts: {},
    editingShortcutDetails: {
        shortcut: {}
    },
    isDialogOpen: false,
    tags: {},
    selectedShortcuts: []


};

const shortcutReducer = (state = intialData, action) => {
    let shortcutId;
    let updatedShortcuts;
    switch (action.type) {
        case EDIT_MENU_CLICKED :
            shortcutId = action.payload.id;
            state = {
                ...state,
                editingShortcutDetails: {
                    shortcut: state.shortcuts[shortcutId]
                },
                isDialogOpen: !state.isDialogOpen
            };
            break;
        case SHORTCUT_TAIL_CLICKED : {

            shortcutId = action.payload.id;
            if (shortcutId === "ADD_SHORTCUT") {
                state = {
                    ...state,
                    editingShortcutDetails: {
                        shortcut: {
                            tags: []
                        }
                    },
                    isDialogOpen: true
                }
            } else {
                window.location.href = state.shortcuts[shortcutId].url;
            }
            break;
        }
        case ADD_SHORTCUT : {
            let shortcut = action.payload.shortcut;
            let updatedShortcuts = {[shortcut._id]: shortcut, ...state.shortcuts,};
            shortcuts = updatedShortcuts;
            state = {
                ...state,
                shortcuts: updatedShortcuts,
                isDialogOpen: !state.isDialogOpen
            };

            break;
        }
        case REMOVE_SHORTCUT : {
            let shortcuts = action.payload.shortcuts;
            state = {
                ...state,
                shortcuts,
                isDialogOpen: false
            };
            break;
        }
        case UPDATE_SHORTCUT : {

            let shortcut = action.payload.shortcut;
            updatedShortcuts = {
                ...state.shortcuts, [shortcut._id]: shortcut
            };
            state = {
                ...state,
                shortcuts: updatedShortcuts,
                isDialogOpen: !state.isDialogOpen
            };

            break;
        }
        case ADD_TAG : {
            let selectedTagId = action.payload.id;
            console.log(selectedTagId);
            if (!selectedTagId) {
                return
            }
            let editingShortcutDetails = {...state.editingShortcutDetails};
            editingShortcutDetails.shortcut.tags.push(selectedTagId);
            editingShortcutDetails.searchText = "";
            state = {
                ...state,
                editingShortcutDetails
            };
            break;
        }
        case REMOVE_TAG : {
            let selectedTagId = action.payload.id;
            let editingShortcutDetails = {...state.editingShortcutDetails};
            let editingShortcut = editingShortcutDetails.shortcut;
            _.remove(editingShortcut.tags, (tag) => {
                return tag === selectedTagId
            });
            console.log(editingShortcutDetails);
            state = {
                ...state,
                tagsMenuOpen: !state.tagsMenuOpen,
                editingShortcutDetails
            };

            break;
        }
        case FECTH_TAGS : {
            let searchText = action.payload.searchText;
            let filteredTags = _.filter(state.tags, (tag) => {
                return tag.value.indexOf(searchText) > -1
            });
            searchText = _.trim(searchText);
            if (_.isEmpty(searchText)) {
                filteredTags = intialData.tags;
            }

            state = {
                ...state,
                tags: filteredTags,
                tagsMenuOpen: true
            };
            break;
        }
        case CREATE_TAG : {
            let tag = action.payload.tag;
            let tagId = tag._id;
            // append to existing tags
            let newTags = {[tagId]: tag, ...state.tags};
            let editingShortcutDetails = {...state.editingShortcutDetails};
            if (_.isEmpty(editingShortcutDetails.shortcut.tags)) {
                editingShortcutDetails.shortcut.tags = [];
            }

            editingShortcutDetails.shortcut.tags.push(tagId);
            state = {
                ...state,
                tags: newTags,
                editingShortcutDetails
            };

            break;
        }
        case SEARCH_CLICKED : {
            let context = action.payload.context;
            switch (context) {
                case "shortcut" : {
                    let searchedShortcuts = action.payload.shortcuts;
                    state = {
                        ...state,
                        shortcuts: searchedShortcuts,
                        selectedTag: null
                    };
                }
                    break;
                case "tags": {
                    let searchedTags = action.payload.tags;
                    state = {
                        ...state,
                        tags: searchedTags
                    };
                }
                case "shortcut_tags" : {
                    let filteredTags = action.payload.tags;
                    state = {
                        ...state,
                        editingShortcutDetails: {...state.editingShortcutDetails, popperData: filteredTags}
                    };

                }
            }
            ;
        }
            break;
        case CLEAR_MODAL_PROPS : {
            state = {
                ...state,
                isDialogOpen: false,
                editingShortcut: {}
            };
            break;
        }
        case FILTER_BY_TAG : {
            let tagId = action.payload.id;
            if (tagId === state.selectedTag) {
                state = {
                    ...state,
                    shortcuts,
                    selectedTag: ""
                };
                break;
            }
            state = {
                ...state,
                shortcuts: action.payload.shortcuts,
                selectedTag: tagId
            };
        }
            break;
        case HANDLE_DROP : {
            let shortcutId = action.payload.id;
            let shortcuts = {...state.shortcuts};
            delete shortcuts[shortcutId];
            state = {
                ...state,
                shortcuts
            }
        }
            break;
        case SHORTCUTS_FETCHED: {
            let shortcuts = action.payload.shortcuts;
            let results = {};
            Object.values(shortcuts).forEach(shortcut => {
                shortcut["id"] = shortcut._id;
                results[shortcut.id] = shortcut;
            });
            state = {
                ...state,
                shortcuts: results
            };
            break;
        }

        case TAGS_FETCHED: {
            let tags = action.payload.tags;
            let results = {};
            tags.forEach(tag => {
                tag["id"] = tag._id;
                results[tag.id] = tag;
            });
            state = {
                ...state,
                tags: results
            }
            break;
        }

        case SHORTCUT_SELECTED: {
            let shortcutId = action.payload.id;
            let isSelected = action.payload.isChecked;
            let selectedIds = [...state.selectedShortcuts];
            if (isSelected) {
                selectedIds.push(shortcutId);
            } else {
                _.remove(selectedIds, (id) => {
                    return id === shortcutId;
                })
            }


            state = {
                ...state,
                selectedShortcuts: selectedIds
            };
            break;
        }

        case DELETE_SHORTCUTS : {
            let shortcuts = action.payload.shortcuts;

            state = {
                ...state,
                shortcuts: shortcuts,
                selectedShortcuts: []
            };
            break;
        }
        case FAVOURITE_SHORTCUT : {
            let shortcut = action.payload.shortcut;
            let shortcuts = {...state.shortcuts};
            shortcuts[shortcut._id] = shortcut;
            state = {
                ...state,
                shortcuts: shortcuts,
            };
            break;
        }
        case FETCH_FAVOURITES : {
            let shortcuts = action.payload.shortcuts;
            state = {
                ...state,
                shortcuts: shortcuts,
                isMyFavouritesClicked : !state.isMyFavouritesClicked
            };
            break;
        }

    }

    return state;
}

export default shortcutReducer;
