import {
    ADD_SHORTCUT,
    ADD_TAG,
    CLEAR_MODAL_PROPS,
    CREATE_TAG, DELETE_SHORTCUTS,
    DONE_CLICKED,
    EDIT_MENU_CLICKED,
    FECTH_TAGS,
    FILTER_BY_TAG,
    REMOVE_SHORTCUT,
    REMOVE_TAG,
    SHORTCUT_TAIL_CLICKED,
    SHORTCUTS_FETCHED,
    UPDATE_SHORTCUT
} from './../constants/actionsConstants'
import {FAVOURITE_SHORTCUT, FETCH_FAVOURITES, SHORTCUT_SELECTED, TAGS_FETCHED} from "../constants/actionsConstants";
import api from './../api/shortcuts-api';

export const editMenuClicked = (shortcutId) => {

    console.log("shortcutId  " + DONE_CLICKED);
    return {
        type: EDIT_MENU_CLICKED,
        payload: {
            id: shortcutId
        }
    }
};

export const shortcutTailClicked = (id) => {

    return {
        type: SHORTCUT_TAIL_CLICKED,
        payload: {
            id
        }
    }
};

export const addShortcut = (name, url, tags) => {

    return async (dispatch) => {
        let response = await api.addShortcutApi(name, url, tags);
        if (!response) {
            return;
        }

        return response ? dispatch({
            type: ADD_SHORTCUT,
            payload: {
                shortcut: response.data
            }
        }) : null;

    };
};

export const updateShortcut = (id, name, url, tags) => {

    return async (dispatch) => {
        let response = await api.updateShortcutApi(id, name, url, tags);
        return response ? dispatch({
            type: UPDATE_SHORTCUT,
            payload: {
                shortcut: response.data
            }
        }) : null;
    };
};

export const removeShortcut = (id) => {

    return async (dispatch) => {
        let response = await api.deleteShortcutApi(id);
        return response ? dispatch({
            type: REMOVE_SHORTCUT,
            payload: {
                shortcuts: response.data.shortcuts
            }
        }) : null;
    };
};

export const clearModalProps = () => {
    return {
        type: CLEAR_MODAL_PROPS
    }
};

export const removeTag = (id) => {

    return {
        type: REMOVE_TAG,
        payload: {
            id
        }
    }
};

export const addTag = (id) => {
    return {
        type: ADD_TAG,
        payload: {
            id
        }
    }
};

export const fetchTags = (searchText) => {

    return {
        type: FECTH_TAGS,
        payload: {
            searchText
        }

    }
};

export const createTag = (tagValue) => {
    tagValue = tagValue.toLowerCase();
    return async (dispatch) => {
        let response = await api.createTagApi(tagValue);
        console.log("this is output " + response)
        return response ? dispatch({
            type: CREATE_TAG,
            payload: {
                tag: response.data
            }
        }) : null;
    };
};

export const filterByTag = (id) => {

    return async (dispatch) => {
        let response = await api.getShortcutsByTagApi(id);
        return response ? dispatch({
            type: FILTER_BY_TAG,
            payload: {
                id,
                shortcuts: response.data.shortcuts
            }
        }) : null;
    };
};

export const fetchShortcuts = (shortcuts) => {
    return {
        type: SHORTCUTS_FETCHED,
        payload: {
            shortcuts
        }
    }
};
export const getTags = (tags) => {
    return {
        type: TAGS_FETCHED,
        payload: {
            tags
        }
    }
};

export const onSelection = (id, isChecked) => {
    return {
        type: SHORTCUT_SELECTED,
        payload: {
            id,
            isChecked
        }
    }
};

export const deleteShortcuts = (ids) => {

    return async (dispatch) => {
        if (ids.length <= 0) {
            return;
        }
        let response = await api.removeShortcutsApi(ids);
        return response ? dispatch({
            type: DELETE_SHORTCUTS,
            payload: {
                shortcuts: response.data.shortcuts,
                deletedShortcutsIds: ids
            }
        }) : null;

    };
};


export const makeShortcutFavourite = (shortcut) => {

    return async (dispatch) => {
        if (!shortcut) {
            return;
        }
        shortcut.isFavourite = !shortcut.isFavourite;
        let response = await api.makeShortcutFavouriteApi(shortcut);
        return response ? dispatch({
            type: FAVOURITE_SHORTCUT,
            payload: {
                shortcut: response.data,
            }
        }) : null;

    };
};

export const fetchMyFavourites = () => {
    return async (dispatch) => {
        let response = await api.fetchMyFavouritesApi();
        return response ? dispatch({
            type: FETCH_FAVOURITES,
            payload: {
                shortcuts: response.data.shortcuts,
            }
        }) : null;

    };
};


