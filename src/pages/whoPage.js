import React from "react";
import '../components/app/app.scss';
import Title from '../components/title/title';
import Decor from "../components/decor/decor";
import Cursor from "../components/cursor/cursor";
import AnimateClipPath from "../components/animation/animateClipPath";

const WhoPage = ({data}) => {
    return (
        <div className="wrapper">
            <AnimateClipPath/>
            <div className="base">
                <section className="section">
                    <div className="section_in animate_state">
                        <Title label={data.titleWhoPage}/>
                    </div>
                </section>
                <Decor/>
                <Cursor/>
            </div>
        </div>
    );
}

export default WhoPage;