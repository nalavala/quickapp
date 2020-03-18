import React from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from "@material-ui/core/Popper/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import Paper from "@material-ui/core/Paper/Paper";
import MenuList from "@material-ui/core/MenuList/MenuList";
import Grow from "@material-ui/core/Grow/Grow";

export default function SimpleMenu(props) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);


    const prevOpen = React.useRef(open);
   /* React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);*/
    const handleClick = (id) => {
        console.log("tag selecred");
        props.addTag(id);
        setOpen(false);
    };


    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };
    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };


    const tags = props.tags || [];

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    return (
        <div>

            {/*<Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                Add tags
            </Button>*/}
            <input type="text" placeholder="Add tags" onClick={handleToggle} />
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    {tags.map((tag, index) => {
                                        return <MenuItem onClick={handleClick.bind(this, index)}
                                                         key={index}> {tag} </MenuItem>
                                    })}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}
