import {REMOVE_SHORTCUT} from "../constants/actionsConstants";
import api from "../api/shortcuts-api";

export const handleDrop = (id) => {

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
