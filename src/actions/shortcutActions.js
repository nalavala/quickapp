import {
    SHORTCUT_TAIL_CLICKED,
    EDIT_MENU_CLICKED,
    ADD_SHORTCUT,
    UPDATE_SHORTCUT,
    CLEAR_MODAL_PROPS,
    DONE_CLICKED,
    REMOVE_SHORTCUT,
    ADD_TAG,
    REMOVE_TAG, FECTH_TAGS, CREATE_TAG, FILTER_BY_TAG
} from './../constants/actionsConstants'
export const editMenuClicked = (shortcutId) => {

    console.log("shortcutId  " + DONE_CLICKED);
    return {
        type : EDIT_MENU_CLICKED,
        payload : {
            id : shortcutId
        }
    }
}

export const shortcutTailClicked = (id) => {

    return {
        type : SHORTCUT_TAIL_CLICKED,
        payload : {
            id
        }
    }
}

export const addShortcut = (name, url,tags) => {
    return {
        type : ADD_SHORTCUT,
        payload : {
            name,
            url,
            tags
        }
    }
}

export const updateShortcut = (id, name, url, tags) => {
    return {
        type : UPDATE_SHORTCUT,
        payload : {
            id,
            name,
            url,
            tags
        }
    }
}

export const removeShortcut = (id) => {
    return {
        type : REMOVE_SHORTCUT,
        payload : {
            id
        }
    }
};

export const clearModalProps = () => {
    return {
        type : CLEAR_MODAL_PROPS
    }
};

export const removeTag = (id) => {

    return {
        type : REMOVE_TAG,
        payload : {
            id
        }
    }
};

export const addTag = (id) => {
    return {
        type : ADD_TAG,
        payload : {
            id
        }
    }
};

export const fetchTags = (searchText) => {

    return {
        type : FECTH_TAGS,
        payload : {
            searchText
        }

    }
};

export const createTag = (tagValue) => {
    return {
        type : CREATE_TAG,
        payload : {
            tagValue
        }
    }
}

export const filterByTag = (id) => {
    return {
        type : FILTER_BY_TAG,
        payload : {
            id
        }
    }
}
