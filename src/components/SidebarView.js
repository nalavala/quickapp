import React from 'react';
import SearchView from "./SearchView";
import SimpleSearchView from "./SimpleSearchView";

const SidebarView = (props) => {

    const handleTagClicked = (id) => {
        props.filterByTag(id);
    };

    let className = "tag filter";

    return (
        <div>

            <SimpleSearchView context="tags"
                              placeholder={"Search tags"}
                              handleSearch={props.handleSearch}/>
            <div className="side-menu-items">
                <ul>
                    {Object.values(props.tags).map(tag => {

                        let TagClassName = className;
                        if(props.selectedTag === tag.id) {
                            TagClassName += " selected"

                        }
                        return (<li>
                            <div className={TagClassName}
                                 onClick={handleTagClicked.bind(this, tag.id)}>
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
