import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div class="header__left">
        {/* Avatar for logged in user */}
        <Avatar className="header__avatar" alt="Shubhankar Das" src="" />
        {/* Time Icon */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* Search Icon */}
        <SearchIcon />
        {/* input */}
        <input placeholder="Search Fishy bowl" />
      </div>
      <div className="header__right">
        {/* Help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
