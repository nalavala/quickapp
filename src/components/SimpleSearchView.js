import React, {useState} from 'react';

const SimpleSearchView = (props) => {
    const [searchText, setSearchText] = useState();


    const handleOnChange = (event) => {
        setSearchText(event.target.value);
        props.handleSearch(props.context, event.target.value);
    };
    return (
        <input className="form-control mr-sm-2"
               value={searchText}
               type="search"
               placeholder={props.placeholder}
               aria-label="Search"
               onChange={handleOnChange}
        />
    )
};

export default SimpleSearchView;
