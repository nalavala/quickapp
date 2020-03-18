import {
    EDIT_MENU_CLICKED,
    SHORTCUT_TAIL_CLICKED,
    ADD_SHORTCUT,
    UPDATE_SHORTCUT,
    REMOVE_SHORTCUT,
    ADD_TAG,
    REMOVE_TAG, FECTH_TAGS, CREATE_TAG, SEARCH_CLICKED, CLEAR_MODAL_PROPS, FILTER_BY_TAG
} from "../constants/actionsConstants";

var _ = require('lodash');


const tags = {
    /*"12": {
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
    "16": {
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

const shortcuts = {
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
    shortcuts: shortcuts,
    editingShortcutDetails: {
        shortcut: {}
    },
    isDialogOpen: false,
    tags: tags,


};


let randomData = ["hello", "revanth", "readdy"];

const generateUUID = () => {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};
const shortcutReducer = (state = intialData, action) => {
    let shortcutId;
    let name;
    let url;
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
            let name = action.payload.name;
            let url = action.payload.url;
            let tags = action.payload.tags;
            let newUUID = generateUUID();

            let updatedShortcuts = {
                ...state.shortcuts, [newUUID]: {
                    id: newUUID,
                    name,
                    url,
                    tags
                }
            };
            state = {
                ...state,
                shortcuts: updatedShortcuts,
                isDialogOpen: !state.isDialogOpen
            };

            break;
        }
        case REMOVE_SHORTCUT : {
            let shortcutId = action.payload.id;
            let updatedShortcuts = {...state.shortcuts};
            delete updatedShortcuts[shortcutId];
            state = {
                ...state,
                shortcuts: updatedShortcuts,
                isDialogOpen: !state.isDialogOpen
            };
            break;
        }
        case UPDATE_SHORTCUT : {

            let id = action.payload.id;
            name = action.payload.name;
            url = action.payload.url;
            let tags = action.payload.tags;
            updatedShortcuts = {
                ...state.shortcuts, [id]: {
                    id,
                    name,
                    url,
                    tags
                }
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
            let tagValue = action.payload.tagValue;
            let tagId = generateUUID();
            let newTags = {...state.tags, [tagId] : {
                id: tagId,
                value: tagValue
            }};
            let editingShortcutDetails = {...state.editingShortcutDetails};
            if(_.isEmpty(editingShortcutDetails.shortcut.tags)) {
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
            let text = action.payload.searchText;
            text.trim();
            let context = action.payload.context;
            switch (context) {
                case "shortcut" : {
                    if (text === "") {
                        state = {
                            ...state,
                            searchText: text,
                            shortcuts: shortcuts
                        };
                        break;
                    }
                    let filteredShortcuts = [];
                    Object.values(shortcuts).forEach(shortcut => {
                        if (shortcut.name.indexOf(text) >= 0) {
                            filteredShortcuts[shortcut.id] = {...shortcut};
                        }
                    });
                    state = {
                        ...state,
                        searchText: text,
                        shortcuts: filteredShortcuts
                    };
                }
                    break;
                case "tags": {
                    if (text === " ") {
                        state = {
                            ...state,
                            tags: tags
                        };
                        break;
                    }
                    let filteredTags = Object.values(tags).filter(tag => {
                        return tag.value.indexOf(text) >= 0;
                    });
                    state = {
                        ...state,
                        tags: filteredTags
                    };
                }
                case "shortcut_tags" : {
                    if (text === "") {
                        break;
                    }
                    let filteredTags = Object.values(tags).filter(tag => {
                        return tag.value.indexOf(text) >= 0;
                    });
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
            if(tagId === state.selectedTag) {
                state = {
                    ...state,
                    shortcuts,
                    selectedTag : ""
                };
                break;
            }
            let filteredShortcuts = {};
            Object.values(shortcuts).forEach(shortcut => {
                if (shortcut.tags.includes(tagId)) {
                    filteredShortcuts[shortcut.id] = shortcut;
                }
            });
            state = {
                ...state,
                shortcuts: filteredShortcuts,
                selectedTag : tagId
            };
        }

    }

    return state;
}

export default shortcutReducer;
