import {
    DONE_CLICKED,
    CANCEL_CLICKED} from "../constants/actionsConstants"
export const doneClicked = () => {

    return {
        type : DONE_CLICKED,
    }
}

export const cancelClicked = () => {

    return {
        type : CANCEL_CLICKED
    }
}
    