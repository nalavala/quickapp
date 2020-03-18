import {
    SEARCH_CLICKED
} from './../constants/actionsConstants'
export const handleSearchClicked = (searchText, context) => {

    return {
        type : SEARCH_CLICKED,
        payload : {
            searchText,
            context
        }
    }
};

export const handleShortcutSearch = (searchText) => {

    return {
        type : SEARCH_CLICKED,
        payload : {
            searchText
        }
    }
};
