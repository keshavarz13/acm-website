import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img src = {require("./../img/dropDown.svg")} width ="32" height ="32"/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/status">Registration Status</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/PastResult">Past Result</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/Register">Register</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/">Home</NavLink></MenuItem>
      </Menu>
    </div>
  );
}