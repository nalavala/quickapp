import React from 'react';
import Popper from '@material-ui/core/Popper';

const CustomPopper = (props) => {


    const setWidth = ({instance: {reference, popper}})  =>{
        // box-sizing: border-box
        popper.style.width = `${reference.offsetWidth}px`;
    };

    const options = {
        onCreate: setWidth,
        onUpdate: setWidth
    };
    return (
        <Popper id="custom-popper" className="custom-popper" popperOptions={options} placement="bottom-start" open={props.open} anchorEl={props.anchorEl}>
            {props.children}
        </Popper>
    )
};

export default CustomPopper;
