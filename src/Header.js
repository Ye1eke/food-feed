import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Avatar} from "@material-ui/core";

function Header() {
  return (
    <div className='header'> <img className = "header__icon" src='https://trello.com/1/cards/624abba842f32641a23513eb/attachments/624abbb9be7c2b26c0680957/previews/624abbbabe7c2b26c0680a0a/download/white_back.png' alt=''/>

    <div className='haeder__center'>
        <input type="text"/>
        <SearchIcon />
    </div>

    <div className='header__right'>
        <p>Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />

    </div>

    </div>

    

  )
}

export default Header