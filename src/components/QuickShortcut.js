import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

function QuickShortcut(props) {
    const handleEditMenuClicked = (shortcutId, event) => {
        event.stopPropagation();
        props.handleEditMenuClick(shortcutId);
    };


    let logoView = null;
    if (props.name === "Add Shortcut") {
        logoView = <div className="icon">+</div>
    } else {
        let faviconURL = "https://api.statvoo.com/favicon/?url=" + props.url;
        logoView = (<img className="icon" title="" alt="" height="60" width="60"
                         src={faviconURL}/>)
    }

    const handleOnClick = () => {
        props.handleClick(props.id);
    };


    return (

        <div className="shortcut">
            <div className="shortcut-draggable" draggable="true">
                <div onClick={handleOnClick} className="shortcut-anchor">
                    <Tooltip title={props.name}>
                        <div className="shortcut-content">
                            {logoView}
                            <div className="shortcut-name">
                                <span> {props.name}</span>
                            </div>
                        </div>
                    </Tooltip>
                    {props.name !== "Add Shortcut" &&
                    <div onClick={handleEditMenuClicked.bind(this, props.id)} className="shortcut-edit-menu">
                        <i className="fa fa-ellipsis-v"></i>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default QuickShortcut;
