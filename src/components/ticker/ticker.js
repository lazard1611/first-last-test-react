import React, { useEffect } from "react";
import gsap from 'gsap';
import './ticker.scss';

const buildTickers = (config) => {
    let tickers;
    const { targets, clone } = config;

    if (config.originals && config.originals.clones) {
        // on window resizes, delete old clones and reset the widths
        config.originals.clones.forEach(el => el && el.parentNode && el.parentNode.removeChild(el));
        config.originals.forEach((el, i) => config.originals.inlineWidths[i] ? (el.style.width = config.originals.inlineWidths[i]) : el.style.removeProperty("width"));
        tickers = config.originals;
    } else {
        tickers = targets;
    }

    const clones = tickers.clones = [];
    const inlineWidths = tickers.inlineWidths = [];

    tickers.forEach((el, index) => {
        inlineWidths[index] = el.style.width;
        el.style.width = "10000px";

        el.children[0].style.display = "inline-block";
        const width = el.children[0].offsetWidth;
        const cloneCount = Math.ceil(window.innerWidth / width * 2);
        const right = el.dataset.direction === "right";
        el.style.width = width * (cloneCount + 1) + "px";

        for (let i = 0; i < cloneCount; i++) {
            clones.push(clone(el));
        }

        gsap.fromTo(el, {
            x: right ? -width : 0
        }, {
            x: right ? 0 : -width,
            duration: width / 100 / parseFloat(el.dataset.speed || 1),
            repeat: -1,
            overwrite: "auto",
            ease: "none"
        });
    });

    config.originals || window.addEventListener("resize", () => buildTickers(config, tickers));
};

const Ticker = () => {
    useEffect(() => {
        gsap.registerEffect({
            name: "ticker",
            effect(targets, config) {
                buildTickers({
                    targets: targets,
                    clone: config.clone || (el => {
                        let clone = el.children[0].cloneNode(true);
                        el.insertBefore(clone, el.children[0]);
                        return clone;
                    })
                });
            }
        });

        gsap.effects.ticker(".js-ticker");
    }, []);

    return (
        <div className="section_ticker">
            <ul data-speed="1" data-direction="right" className="section_ticker__list section_ticker__list--top js-ticker">
                <li>FULL-CYCLE EVENT AGENCY</li>
            </ul>
            <ul data-speed="1" data-direction="left" className="section_ticker__list section_ticker__list--bottom js-ticker">
                <li>FULL-CYCLE EVENT AGENCY</li>
            </ul>
        </div>
    );
};

export default Ticker;
