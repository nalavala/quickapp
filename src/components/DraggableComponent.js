import React from 'react';

const Draggable = (props) => {


    const handleDragStart = (ev) => {
        ev.dataTransfer.setData("id", props.id);
    };

    return (
        <div draggable="true"  onDragStart={handleDragStart} className="draggable">
            {props.children}
        </div>
    )
};

export default Draggable;

