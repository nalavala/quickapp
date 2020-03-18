import React from 'react';
import CustomChip from "./CustomChip";
import SearchView from "./SearchView";

const TagsContainer = (props) => {


    const tagsView = props.appliedTags.map((tagId) => {
        console.log(props.tags);
       return  <CustomChip
            value={props.tags[tagId].value}
            id={tagId}
            onDelete={props.removeTag.bind(this, tagId)}
        />
    });

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
            <div className="tags-container">
                {tagsView}
            </div>
        </div>

    )

};

export default  TagsContainer;
