import React, {useEffect} from 'react';
import SidebarView from "./SidebarView";
import {handleSearchClicked} from "../actions/navbar";
import connect from "react-redux/es/connect/connect";
import {getTags, filterByTag, fetchShortcuts} from "../actions/shortcutActions";
import Droppable from "./DroppableComponent";
import ContentView from "./ContentView";
import axios from "axios";
import api from './../api/shortcuts-api'

const MainBodyView = (props) => {


    api.removeShortcutsApi([1,2]);
    useEffect(() => {
        axios.get('http://localhost:1234/tags')
            .then(function (response) {
                console.log(response);
                props.fetchTags(response.data.tags)
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://localhost:1234/shortcuts')
            .then(function (response) {
                props.fetchShortcuts(response.data.shortcuts)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    return (
        <div className="container-fluid">
            <div className="row">
                <SidebarView
                    tags={props.tags}
                    handleSearch={props.handleShortcutSearch.bind("shortcut")}
                    filterByTag={props.filterByTag}
                    selectedTag={props.selectedTag}/>
                <ContentView/>
                <Droppable>
                    <div className="col delete-drop-section drag-drop">
                        <p>Drop here to delete</p>
                    </div>
                </Droppable>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        tags: state.tags,
        selectedTag: state.selectedTag || "",
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleShortcutSearch: (context, searchText) => {
            dispatch(handleSearchClicked(searchText, context))
        },
        filterByTag: (id) => {
            dispatch(filterByTag(id));
        },
        fetchTags: (tags) => {
            dispatch(getTags(tags))
        },
        fetchShortcuts : (shortcuts) => {
            dispatch(fetchShortcuts(shortcuts))
        }

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainBodyView)

