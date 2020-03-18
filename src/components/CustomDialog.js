import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TagsContainer from "./TagsContainer";
import SearchView from "./SearchView";

export default function CustomDialog(props) {
    let editingName = props.shortcut.name || "";
    let editingUrl = props.shortcut.url || "";
    const [name, setName] = React.useState(editingName);
    const [url, setUrl] = React.useState(editingUrl);
    const handleDone = () => {
        props.handleDoneButtonClicked(props.shortcut.id, name, url, props.shortcut.tags);
    };

    const handleCancel = () => {
        props.handleCancelButtonClicked();
    };


    const handleRemove = () => {
        props.handleRemoveButtonClicked(props.shortcut.id);
    };

    let isDoneHidden = !(name.trim() && url.trim())
    let isRemoveHidden = !props.shortcut.id ? true : false;

    return (
        <div>
            <Dialog open={props.open} aria-labelledby="form-dialog-title" onClick={(e) => {
                e.stopPropagation()
            }}>
                <DialogTitle id="form-dialog-title">Add Shortcut</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    />
                    <TextField
                        margin="dense"
                        id="url"
                        label="url"
                        type="text"
                        fullWidth
                        value={url}
                        onChange={(event) => setUrl(event.target.value)}
                    />


                    <TagsContainer appliedTags={props.shortcut.tags}
                                   tags={props.tags}
                                   handleSearch={props.handleSearch}
                                   popperData={props.popperData}
                                   removeTag={props.removeTag}
                                   addTag={props.addTag}
                                   createTag={props.createTag}/>

                </DialogContent>
                <DialogActions>
                    <Button disabled={isRemoveHidden} onClick={handleRemove} color="primary">
                        Remove
                    </Button>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button disabled={isDoneHidden} onClick={handleDone} color="primary">
                        Done
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
