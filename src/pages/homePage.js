import React, { useEffect } from "react";
import '../components/app/app.scss';
import Cursor from '../components/cursor/cursor';
import Ticker from '../components/ticker/ticker';
import Decor from '../components/decor/decor';
import Title from '../components/title/title';
import {gsap} from "gsap";

const HomePage = ({data}) => {


    return (
        <div className="wrapper">
            <div className="animate"></div>
            <div className="base">
                <section className="section">
                    <div className="section_in">
                        <Title label={data.titleHome}/>
                    </div>
                </section>
                <Decor/>
                <Ticker/>
                <Cursor/>
            </div>
        </div>
    );
}

export default HomePage;
