import React from 'react';
import ShortcutContainer from "./ShortcutContainer";
import SidebarView from "./SidebarView";
import {handleSearchClicked} from "../actions/navbar";
import connect from "react-redux/es/connect/connect";
import {
    addShortcut, addTag,
    clearModalProps, createTag,
    editMenuClicked, filterByTag, removeShortcut, removeTag,
    shortcutTailClicked,
    updateShortcut
} from "../actions/shortcutActions";
import Dialog from "./CustomDialog";

const MainBodyView = (props) => {


    let modalView = null;
    if (props.isDialogOpen) {
        modalView = <Dialog open={props.isDialogOpen}
                            shortcut={props.editingShortcutDetails.shortcut}
                            tags={props.tags}
                            handleDoneButtonClicked={props.doneButtonClicked}
                            handleCancelButtonClicked={props.cancelClicked}
                            handleRemoveButtonClicked={props.removeClicked}
                            popperData={props.popperData}
                            handleSearch={props.handleShortcutSearch}
                            addTag={props.addTag}
                            removeTag={props.removeTag}
                            fetchTags={props.fetchTags}
                            createTag={props.createTag}/>
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col col-md-2 sidebar">
                    <SidebarView
                        tags={props.tags}
                        handleSearch={props.handleShortcutSearch.bind("shortcut")}
                        filterByTag={props.filterByTag}
                        selectedTag={props.selectedTag}/>
                </div>
                <div className="col body-container">
                    <ShortcutContainer shortcuts={props.shortcuts}
                                       handleEditMenuClick={props.handleEditMenuClicked}
                                       handleClick={props.shortcutTailClicked}/>
                    {modalView}
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        popperData: state.editingShortcutDetails.popperData,
        tags: state.tags,
        shortcuts: state.shortcuts,
        isDialogOpen: state.isDialogOpen,
        editingShortcutDetails: state.editingShortcutDetails,
        selectedTag : state.selectedTag || ""
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleSearch: (context, searchText) => {
            dispatch(handleSearchClicked(searchText, context))
        },
        handleShortcutSearch: (context, searchText) => {
            dispatch(handleSearchClicked(searchText, context))
        },
        handleEditMenuClicked: (id) => {
            dispatch(editMenuClicked(id))
        },
        shortcutTailClicked: (id) => {
            dispatch(shortcutTailClicked(id))
        },
        doneButtonClicked: (id, name, url, tags) => {
            if (id) {
                dispatch(updateShortcut(id, name, url, tags));
            } else {
                dispatch(addShortcut(name, url, tags));
            }
        },
        cancelClicked: () => {
            dispatch(clearModalProps());
        },
        removeClicked: (id) => {
            dispatch(removeShortcut(id));
        },
        removeTag: (id) => {
            dispatch(removeTag(id))
        },
        addTag : (id) => {
            dispatch(addTag(id));
        },
        filterByTag : (id) => {
            dispatch(filterByTag(id));
        },
        createTag : (tagValue) => {
            dispatch(createTag(tagValue))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainBodyView)

