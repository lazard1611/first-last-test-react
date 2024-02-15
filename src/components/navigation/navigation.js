import React from "react";
import './navigation.scss';

import NavLink from '../link/link';

const Navigation = ({links}) => {
    const CLASSNAMES = {
        bodyOpenMenuState: 'body--open_menu_state',
    };

    const closeMenu = () => {
        if (document.body.classList.contains(CLASSNAMES.bodyOpenMenuState)) {
            setTimeout(() => {
                document.body.classList.remove(CLASSNAMES.bodyOpenMenuState);
            }, 300)
        }
    }

    return (
        <nav className="header_nav">
            <ul className="header_nav_list">
                {links.map((link, index) => (
                    <li key={index} className="header_nav_item">
                        <NavLink
                            url={link.url}
                            label={link.label}
                            onClick={closeMenu}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
