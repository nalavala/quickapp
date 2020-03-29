import React from 'react';
import SimpleSearchView from "./SimpleSearchView";

const SidebarView = (props) => {

    const handleTagClicked = (id) => {
        props.filterByTag(id);
    };

    let className = "tag filter";

    return (
        <div className="col col-md-2 sidebar">

            <div>
            <SimpleSearchView context="tags"
                              placeholder={"Search tags"}
                              handleSearch={props.handleSearch}
                              className={"black-theme"}/>
            </div>
            <div className="side-menu-items">
                <ul>
                    {Object.values(props.tags).map(tag => {

                        let TagClassName = className;
                        if(props.selectedTag === tag._id) {
                            TagClassName += " selected"

                        }
                        return (<li>
                            <div className={TagClassName}
                                 onClick={handleTagClicked.bind(this, tag._id)}>
                                {tag.value}
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
};

export default SidebarView;
