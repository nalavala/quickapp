import React from 'react';
import connect from "react-redux/es/connect/connect";
import {handleDrop} from "../actions/dragDrop";

const Droppable = (props) => {

    const allowDrop = (ev) => {
        ev.preventDefault();
    };

    const handleDragDrop = (ev) => {

        ev.preventDefault();
        let id = ev.dataTransfer.getData("id");
        console.log(id);
        props.handleDrop(id);

    };
    return (
        <div className="droppable" onDragOver={allowDrop} onDrop={handleDragDrop}>
            {props.children}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleDrop: (id) => {
            dispatch(handleDrop(id))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Droppable)


