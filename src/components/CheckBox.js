import React from 'react';

const CheckBox = (props) => {


    const handleOnClick = (event) => {
        event.stopPropagation();
        props.handleOnChange(event.target.checked);
    };
    return (
        <input type="checkbox" checked={props.isSelected} onClick={handleOnClick}/>
    )
};

export default CheckBox;
