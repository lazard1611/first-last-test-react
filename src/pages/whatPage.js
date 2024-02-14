import React, { useEffect } from "react";
import '../components/app/app.scss';
import Title from '../components/title/title';
import Decor from "../components/decor/decor";
import Cursor from "../components/cursor/cursor";
import {gsap} from "gsap";


const WhatPage = ({data}) => {
    useEffect(() => {
        const tl = gsap.timeline({paused: false});
        tl
            .to(".animate", {
                duration: 0.8,
                xPercent: 100,
                ease: "power2.out",
            })
            .set(".animate", {}, "+=0.4")
            .to(".animate", {
                duration: 0.8,
                xPercent: 210,
                ease: "power2.out",
            })

    }, []);

    return (
        <div className="wrapper">
            <div className="animate"></div>
            <div className="base">
                <section className="section">
                    <div className="section_in">
                        <Title label={data.titleWhatPage}/>
                    </div>
                </section>
                <Decor/>
                <Cursor/>
            </div>
        </div>
    );
}

export default WhatPage;
