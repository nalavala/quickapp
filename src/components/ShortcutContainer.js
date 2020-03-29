import React from 'react';
import QuickShortcut from "./QuickShortcut";
import Draggable from "./DraggableComponent";
import {
    deleteShortcuts,
    editMenuClicked,
    makeShortcutFavourite,
    onSelection,
    shortcutTailClicked,
} from "../actions/shortcutActions";
import connect from "react-redux/es/connect/connect";
import _ from 'lodash'

const ShortcutContainer = (props) => {

    let shortcuts = Object.values(props.shortcuts ||[]);
    let emptyShortcut = {
        name: "Add Shortcut",
        _id: "ADD_SHORTCUT"
    };
    shortcuts.unshift(emptyShortcut);
    return (
        <div className="shortcut-container">
            {shortcuts.map(shortcut => {

                let isSelected = _.includes(props.selectedIds, shortcut._id);
                return <Draggable id={shortcut._id}>
                    <QuickShortcut name={shortcut.name}
                                   id={shortcut._id}
                                   url={shortcut.url}
                                   isSelected={isSelected}
                                   isFavourite={shortcut.isFavourite}
                                   handleEditMenuClick={props.handleEditMenuClick}
                                   handleClick={props.shortcutTailClicked}
                                   onCheckboxClicked = {props.onCheckboxClicked}
                                   favouriteClicked={props.makeShortcutFavourite.bind(this,shortcut)}
                    />
                </Draggable>


            })}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        shortcuts: state.shortcuts,
        selectedIds : state.selectedShortcuts || []
    }
};
const mapDispatchToProps = (dispatch) => {
    return {

        handleEditMenuClick: (id) => {
            dispatch(editMenuClicked(id))
        },
        shortcutTailClicked: (id) => {
            dispatch(shortcutTailClicked(id))
        },
        onCheckboxClicked : (id, isChecked) => {
            dispatch(onSelection(id, isChecked));
        },
        deleteShortcuts : () => {
            dispatch(deleteShortcuts())
        },
        makeShortcutFavourite : (shortcut) => {
            dispatch(makeShortcutFavourite(shortcut));
        }



    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShortcutContainer)


