import React from 'react';
import ShortcutContainer from "./ShortcutContainer";
import Dialog from "./CustomDialog";
import {
    addShortcut, addTag,
    clearModalProps, createTag,
    filterByTag, removeShortcut, removeTag,
    updateShortcut
} from "../actions/shortcutActions";
import connect from "react-redux/es/connect/connect";
import FilterContainer from "./FiltersContainer";
import {handleSearchClicked} from "../actions/navbar";

const ContentView = (props) => {

    let modalView = null;
    if (props.isDialogOpen) {
        modalView = <Dialog open={props.isDialogOpen}
                            shortcut={props.editingShortcutDetails.shortcut}
                            tags={props.tags}
                            handleDoneButtonClicked={props.doneButtonClicked}
                            handleCancelButtonClicked={props.cancelClicked}
                            handleRemoveButtonClicked={props.removeClicked}
                            popperData={props.popperData}
                            handleSearch={props.handleTagSearch}
                            addTag={props.addTag}
                            removeTag={props.removeTag}
                            fetchTags={props.fetchTags}
                            createTag={props.createTag}/>;
    }

    return (
        <div className="col body-container">
            <FilterContainer/>
            <ShortcutContainer/>
            {modalView}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        popperData: state.editingShortcutDetails.popperData,
        tags: state.tags,
        isDialogOpen: state.isDialogOpen,
        editingShortcutDetails: state.editingShortcutDetails,
        selectedTag: state.selectedTag || "",
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
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
        addTag: (id) => {
            dispatch(addTag(id));
        },
        filterByTag: (id) => {
            dispatch(filterByTag(id));
        },
        createTag: (tagValue) => {
            dispatch(createTag(tagValue))
        },
        handleTagSearch: (context, searchText) => {
            dispatch(handleSearchClicked(searchText, context))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentView)


