import {SEARCH_CLICKED} from './../constants/actionsConstants'
import axios from "axios";


export const handleSearchClicked = (searchText, context) => {

    return (dispatch) => {

        searchText = searchText.trim();
        switch (context) {
            case "tags" : {
                axios.post("http://localhost:1234/tags/search", {searchText: searchText})
                    .then(function (response) {
                        return dispatch({
                            type: SEARCH_CLICKED,
                            payload: {
                                tags: response.data.tags,
                                context
                            }
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
                break;
            case "shortcut" : {
                axios.post("http://localhost:1234/shortcuts/search", {searchText: searchText})
                    .then(function (response) {
                        return dispatch({
                            type: SEARCH_CLICKED,
                            payload: {
                                shortcuts: response.data.shortcuts,
                                context
                            }
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
                break;
            case "shortcut_tags" : {
                if(!searchText) return;
                axios.post("http://localhost:1234/tags/search", {searchText: searchText})
                    .then(function (response) {
                        return dispatch({
                            type: SEARCH_CLICKED,
                            payload: {
                                tags: response.data.tags,
                                context
                            }
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    };
};

export const handleShortcutSearch = (searchText) => {

    return {
        type: SEARCH_CLICKED,
        payload: {
            searchText
        }
    }
};
