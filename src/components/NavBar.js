import React from 'react';
import SearchView from "./SearchView";
import connect from "react-redux/es/connect/connect";
import {handleSearchClicked} from "../actions/navbar";
import SimpleSearchView from "./SimpleSearchView";

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light">
            <a href="#" className="navbar-brand">Navbar</a>
            <div>
                <SimpleSearchView context="shortcut"
                                  placeholder={"Search shortcuts"}
                                  handleSearch={props.handleSearchButtonClicked}/>
            </div>

        </nav>
    )
};


const mapStateToProps = (state) => {
    return {
        searchText : state.searchText,
        popperData : state.popperData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchButtonClicked: (context, searchText) => {
            dispatch(handleSearchClicked(searchText, context))
        }

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar)

