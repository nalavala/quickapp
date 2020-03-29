import React, {useState} from 'react';
import CustomPopper from "./CustomPopper";
var _ = require('lodash');


const SearchView = (props) => {

    const text = props.searchText || "";
    const [searchText, setSearchText] = useState(text);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOnChange = (event) => {
        setSearchText(event.target.value);
        props.handleSearch(props.context, event.target.value);

        /*if (!event.target.value) {
            setAnchorEl(null);
            return;
        }*/
        setAnchorEl(event.currentTarget);
    };

    const handleBlur = (event) => {
        //setAnchorEl(null);
    };

    const handleFocus = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const addTag= (id) => {
        console.log(id);
        props.addTag(id);
        setSearchText("");
    };


    const handleTagOptionClicked = (id) => {
        setSearchText("");
      if(id === "ADD_TAG") {
          props.createTag(searchText);
          return;
      }

      props.addTag(id);
    };



    const getPopperInnerView = () => {
        let popperData = props.popperData || [];
        let trimmedSearchText  = searchText.trim();
        if(popperData.length == 0 && !_.isEmpty(trimmedSearchText)) {
            popperData.push({
                _id : "ADD_TAG",
                value : `Create tag "${trimmedSearchText}"`
            })
        }
        return <div className="popper-data">
            <ul className="list-group">
                {popperData.map(data => <li className="list-group-item" key={data._id}>
                    <div className="tag-option" onClick={handleTagOptionClicked.bind(this,data._id)}>{data.value}</div>
                </li>)}
            </ul>
        </div>
    };

    const getPopperView = () => {
        let shouldOpenPopper = false;
        if (searchText && anchorEl) {
            shouldOpenPopper = true;
        }
        return (<CustomPopper open={shouldOpenPopper} anchorEl={anchorEl}>
            {getPopperInnerView()}
        </CustomPopper>)

    };


    return (

        <>
            <input className="form-control mr-sm-2"
                   value={searchText}
                   type="search"
                   placeholder={props.placeholder}
                   aria-label="Search"
                   onChange={handleOnChange}
                   onBlur={handleBlur}
                   onFocus={handleFocus}
            />
            {
                getPopperView()
            }
            {!props.disableButton &&
            <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={() => props.handleSearch(searchText)}
            >Search</button>
            }
        </>
    )
};

export default SearchView;
