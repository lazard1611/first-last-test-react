import React from "react";
import './navigation.scss';
import Link from '../link/link';

const Navigation = ({links}) => {

    const elements = links.map((link) => {
        const {label, url} = link;

        return (
            <li className="header_nav_item">
                <Link url={url} label={label}/>
            </li>
        )
    })

    return (
        <nav className="header_nav">
            <ul className="header_nav_list">
                {elements}
            </ul>
        </nav>
    )
};

export default Navigation;
