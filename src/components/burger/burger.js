import React from "react";
import './burger.scss';

const Burger = () => {

    const CLASSNAMES = {
        bodyOpenMenuState: 'body--open_menu_state',
    };

    const $body = document.body;

    let isMenuOpen = false;
    const handleClick = () => {
        if (!isMenuOpen) {
            $body.classList.add(CLASSNAMES.bodyOpenMenuState);
            isMenuOpen = true;
        } else {
            $body.classList.remove(CLASSNAMES.bodyOpenMenuState);
            isMenuOpen = false;
        }
    }

    return (
        <button onClick={handleClick} className="burger" type="button" aria-label="Toggle menu">
            <span></span>
        </button>
    )
};

export default Burger;
