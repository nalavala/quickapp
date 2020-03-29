import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

    let  className="shortcut-button black-theme";
    if(props.isActive) {
        className +=" active"
    }

    return (
        <button type="button" className={className} onClick={props.handleOnClick}>{props.value}</button>
    )
};

Button.propTypes = {
    handleOnClick: PropTypes.func,
    value : PropTypes.string,
    isActive : PropTypes.bool
};
Button.defaultProps = {
    isActive: false,
};

export default Button;
