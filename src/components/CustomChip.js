import React from 'react';
import Chip from "@material-ui/core/Chip/Chip";

const CustomChip = (props) => {

    return (
        <Chip
            label={props.value}
            className={"chip"}
            clickable={false}
            onDelete={props.onDelete.bind(this, props.id)}
        />
    )
};

export default CustomChip;
