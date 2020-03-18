import React from 'react';
import QuickShortcut from "./QuickShortcut";

const ShortcutContainer = (props) => {

    let shortcuts = Object.values(props.shortcuts) || [];
    let emptyShortcut = {
        name : "Add Shortcut",
        id : "ADD_SHORTCUT"
    };
    shortcuts.unshift(emptyShortcut);
    return (
        <div className="shortcut-container">
            {shortcuts.map(shortcut => {
                return <QuickShortcut name={shortcut.name}
                                      id={shortcut.id}
                                      url={shortcut.url}
                                      handleEditMenuClick={props.handleEditMenuClick}
                                      handleClick= {props.handleClick}
                />
            })}
        </div>
    )
};

export default ShortcutContainer;
