import React, {useEffect} from "react";
import { gsap } from "gsap";
import './lg-btn.scss';

const Lang = ({lgLinks}) => {

    useEffect(() => {
        const $lg = document.querySelector('.header_lg');
        if (!$lg) return;

        let isClick = false;
        let timeline = gsap.timeline({
            paused: true
        });

        timeline.fromTo('.header_lg__item',
            {
                x: 20,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                stagger: 0.3,
                duration: 0.5,
            }
        );

        const handleClick = () => {
            if (!isClick) {
                timeline.play();
                isClick = true;
            } else {
                timeline.reverse();
                isClick = false;
            }
        };

        $lg.addEventListener('click', handleClick);

        $lg.addEventListener('mouseover', () => {
            timeline.play();
        });

        $lg.addEventListener('mouseout', () => {
            timeline.reverse();
        });

        return () => {
            $lg.removeEventListener('click', handleClick);
        };
    }, []);

    const elements = lgLinks.map((link) => {
        const {label, url} = link;

        return (
            <li className="header_lg__item">
                <a href={url} className="header_lg__link">{label}</a>
            </li>
        )
    })

    return (
        <div role="button" className="header_lg">
            <span>👅</span>
            <ul className="header_lg__list">
                {elements}
            </ul>
        </div>
    )
};

export default Lang;
