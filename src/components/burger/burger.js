import React, { Component } from 'react';
import './burger.scss';

export default class Burger extends Component {
    state = {
        isMenuOpen: false,
    }

    handleClick = () => {
        this.setState((prevState) => {
            return {
                isMenuOpen: !prevState.isMenuOpen
            }
        });
    }

    render () {
        const CLASSNAMES = {
            bodyOpenMenuState: 'body--open_menu_state',
        };
        const {isMenuOpen} = this.state;

        if (isMenuOpen) {
            document.body.classList.add(CLASSNAMES.bodyOpenMenuState);
        } else {
            document.body.classList.remove(CLASSNAMES.bodyOpenMenuState);
        }

        return (
            <button onClick={this.handleClick} className="burger" type="button" aria-label="Toggle menu">
                <span></span>
            </button>
        );
    }
};


