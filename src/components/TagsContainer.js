import React from 'react';
import SearchView from "./SearchView";
import ChipList from "./ChipList";

const TagsContainer = (props) => {

    return (
        <div>
           <SearchView
               placeholder={"Search tags"}
               disableButton={true}
               handleSearch ={props.handleSearch}
               context="shortcut_tags"
               popperData={props.popperData}
               addTag={props.addTag}
               createTag={props.createTag}
           />
            <ChipList appliedTagIds={props.appliedTags}
                      tags={props.tags}
                      removeTag={props.removeTag}/>
        </div>

    )

};

export default  TagsContainer;
