import React from 'react';
import CustomChip from "./CustomChip";

const ChipList = (props) => {

    let tags = props.tags || [];
    const tagsView = props.appliedTagIds.map((tagId) => {
        return  <CustomChip
            value={tags[tagId].value}
            id={tagId}
            onDelete={props.removeTag.bind(this, tagId)}
        />
    });

    return  (
        <div className="chip-container">
            {tagsView}
        </div>
    )
};

export default ChipList;
