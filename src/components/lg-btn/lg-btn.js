import './lg-btn.scss';
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const Lang = ({ lgLinks }) => {
    const [isClick, setIsClick] = useState(false);

    useEffect(() => {
        const $lg = document.querySelector('.header_lg');
        if (!$lg) return;

        const timeline = gsap.timeline({
            paused: true
        });

        timeline.fromTo(
            '.header_lg__item',
            {
                x: 20,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                stagger: 0.3,
                duration: 0.5
            }
        );

        const handleClick = () => {
            if (!isClick) {
                timeline.play();
            } else {
                timeline.reverse();
            }
            setIsClick(!isClick);
        };

        $lg.addEventListener('click', handleClick);

        $lg.addEventListener('mouseover', () => {
            timeline.play();
        });

        $lg.addEventListener('mouseout', () => {
            if (!isClick) {
                timeline.reverse();
            }
        });

        return () => {
            $lg.removeEventListener('click', handleClick);
        };
    }, [isClick]);

    return (
        <div role="button" className="header_lg">
            <span>👅</span>
            <ul className="header_lg__list">
                {lgLinks.map((link, index) => (
                    <li key={index} className="header_lg__item">
                        <a
                           href={link.url}
                           className="header_lg__link"
                        >
                           {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Lang;
