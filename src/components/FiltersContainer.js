import React from 'react';
import SimpleSearchView from "./SimpleSearchView";
import {handleSearchClicked} from "../actions/navbar";
import Button from "./Button"

import connect from "react-redux/es/connect/connect";
import {deleteShortcuts, fetchMyFavourites} from "../actions/shortcutActions";

const FilterContainer = (props) => {



    return (
        <div className="filters-section">
            <div className="std-filters">
                <div className="constant">
                    Sort By
                </div>
                <div className="form-group" style={{margin: 0}}>
                    <select className="form-control selected-filter" id="exampleFormControlSelect1">
                        <option>Created by</option>
                        <option>Importance</option>
                    </select>
                </div>
                <div>
                    <Button value={"delete"}
                            handleOnClick={props.deleteShortcuts.bind(this, props.selectedShortcutIds)}></Button>
                </div>
                <div>
                    <Button isActive={props.isMyFavouritesActive} value={"My Favourites"}
                            handleOnClick={props.myFavouritesClicked}></Button>
                </div>

            </div>
            <div>
                <SimpleSearchView context="shortcut"
                                  placeholder={"Search shortcuts"}
                                  handleSearch={props.handleShortcutSearch}
                                  className="black-theme"/>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        selectedShortcutIds: state.selectedShortcuts,
        isMyFavouritesActive : state.isMyFavouritesClicked || false
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleShortcutSearch: (context, searchText) => {
            dispatch(handleSearchClicked(searchText, context))
        },
        deleteShortcuts: (ids) => {
            dispatch(deleteShortcuts(ids))
        },
        myFavouritesClicked : () => {
            dispatch(fetchMyFavourites());
        }

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterContainer)







