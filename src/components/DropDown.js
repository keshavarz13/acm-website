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
        <NavLink onClick={() => window.scrollTo(0, 0)} exact to="/" className="nav-links"><MenuItem onClick={handleClose} className="nav-link">Home</MenuItem></NavLink>
        <NavLink onClick={() => window.scrollTo(0, 0)} exact to="/Register" className="nav-links"><MenuItem onClick={handleClose} className="nav-link">Register</MenuItem></NavLink>
        <NavLink onClick={() => window.scrollTo(0, 0)} exact to="/PastResult" className="nav-links"><MenuItem onClick={handleClose} className="nav-link">Past Results</MenuItem></NavLink>
        <NavLink onClick={() => window.scrollTo(0, 0)} exact to="/status" className="nav-links"><MenuItem onClick={handleClose} className="nav-link">Registration Status</MenuItem></NavLink>
      </Menu>
    </div>
  );
}