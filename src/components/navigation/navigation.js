import React from "react";
import './navigation.scss';

import NavLink from '../link/link';

const Navigation = ({links, handleClick}) => {
    return (
        <nav className="header_nav">
            <ul className="header_nav_list">
                {links.map((link, index) => (
                    <li key={index} className="header_nav_item">
                        <NavLink
                            url={link.url}
                            label={link.label}
                            onClick={handleClick}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
