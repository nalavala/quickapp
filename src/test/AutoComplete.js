/* eslint-disable no-use-before-define */
import React, {useState} from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const _ = require('lodash')

const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
    },
}));

export default function Tags(props) {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState("");

    const tagsView = props.appliedTags.map((tag, index) => (
        <Chip
            label={tag.value}
            onDelete={props.removeTag.bind(this, tag.id)}
        />
    ));

    let createButtonView = null;
    const onChange = (e,selectedTags) => {
        props.addTag(selectedTags[selectedTags.length-1].id);
    };


    const onInputChange =  (e, newValue) => {
        setInputValue(newValue);
        props.fetchTags(newValue);
    };

    return (
        <div className="tags-container">
            <Autocomplete
                multiple
                id="tags-outlined"
                options={props.tags}
                getOptionLabel={tag => tag.value}
                onChange={onChange}
                renderTags={() => {}}
                onInputChange={onInputChange}
                renderInput={params => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="filterSelectedOptions"
                        placeholder="Favorites"
                        fullWidth
                        value={inputValue}
                    />
                )}
            />
            <div className="selectedTags">{tagsView}</div>
        </div>
    );
}
