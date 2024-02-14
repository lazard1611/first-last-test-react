import React from "react";
import '../components/app/app.scss';
import Title from '../components/title/title';
import Decor from "../components/decor/decor";
import Cursor from "../components/cursor/cursor";

const WherePage = ({data}) => {
    return (
        <div className="wrapper">
            <div className="base">
                <section className="section">
                    <div className="section_in">
                        <Title label={data.titleWherePage}/>
                    </div>
                </section>
                <Decor/>
                <Cursor/>
            </div>
        </div>
    );
}

export default WherePage;
