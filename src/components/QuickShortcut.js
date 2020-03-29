import React, {useState} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import CheckBox from "./CheckBox";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function QuickShortcut(props) {

    const handleEditMenuClicked = (shortcutId, event) => {
        event.stopPropagation();
        props.handleEditMenuClick(shortcutId);
    };


    let logoView = null;
    if (props.id === "ADD_SHORTCUT") {
        logoView = <div className="icon">+</div>
    } else {
        let faviconURL = "https://api.statvoo.com/favicon/?url=" + props.url;
        logoView = (<img className="icon" title="" alt="" height="60" width="60"
                         src={faviconURL}/>)
    }

    const handleOnClick = () => {
        props.handleClick(props.id);
    };

    let className = "shortcut";
    if(props.isSelected) {
        className += " selected"
    }

    let favouriteIcon = <StarBorderIcon/>;

    if(props.isFavourite) {
        favouriteIcon = <StarIcon/>
    }


    const handleFavouriteIconClicked = (event) => {
        event.stopPropagation();
        props.favouriteClicked();
    };

    return (

        <div className={className}>
                <div onClick={handleOnClick} className="shortcut-anchor">
                    <Tooltip title={props.name}>
                        <div className="shortcut-content">
                            {logoView}
                            <div className="shortcut-name">
                                <span> {props.name}</span>
                            </div>
                        </div>
                    </Tooltip>
                    {props.id !== "ADD_SHORTCUT" &&
                    <div className="shortcut-options">
                        <div className="left-options">
                            <div className="select-checkbox">
                                <CheckBox   isSelected={props.isSelected}
                                            handleOnChange={props.onCheckboxClicked.bind(this,props.id)}/>
                            </div>
                            <div className="favourite" onClick={handleFavouriteIconClicked}>
                                {favouriteIcon}
                            </div>
                        </div>
                        <div className="right-options">
                            <div className="shortcut-edit-menu" onClick={handleEditMenuClicked.bind(this, props.id)} >
                                <i className="fa fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </div>}
                </div>
        </div>
    );
}

export default QuickShortcut;
