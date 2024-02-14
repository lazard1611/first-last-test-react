import React from "react";
import './header.scss';
import Navigation from '../navigation/navigation';
import Burger from '../burger/burger';
import Logo from '../logo/logo';
import Lang from '../lg-btn/lg-btn';

const Header = ({data}) => {
    const {lgLinks, links, logoURL} = data;

    return (
        <header className="header">
            <div className="header_in">
                <Lang lgLinks={lgLinks}/>
                <div className="header_logo_wrap">
                    <Logo url={logoURL}/>
                </div>
                <Burger/>
                <Navigation links={links}/>
            </div>
        </header>
    )
};

export default Header;
