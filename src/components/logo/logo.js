import React, { useEffect } from "react";
import { gsap } from "gsap";
import './logo.scss';

const Logo = ({url}) => {

    useEffect(() => {
        const animatePathBg = () => {
            gsap.to(".path_bg", {
                yPercent: -100,
                duration: 2.5,
                ease: "power2.inOut"
            });
        };
        animatePathBg();
    }, []);

    return (
        <a href={url} className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 46">
                <path
                    d="M29.19,6.12l8-1.35V32.31l-8-1.36ZM25.77,2.71V34.37l14.84,2.71V0ZM69.23,18.2v3.41h4.65v9.33H65.47V6.12h7.2V11.2h3.41V2.71h-14V34.35H77.29V18.2ZM11.61,28.09l0,.08q2.8-12.78,5.6-25.46h5.12V34.35H18.94V9.63c-.05,0-5.69,24.74-5.69,24.74H10S4.33,9.63,4.28,9.63V34.35H.86V2.71H6q2.79,12.66,5.61,25.46Zm43.32-22H44.44V2.71H58.63V6.12L48.14,30.94H58.63v3.41H44.44V30.94Zm29.2,28.23H80.71V2.71h3.42ZM31,46v-.52H28.25V43.89h2.1v-.52h-2.1V42h2.61v-.52H27.68V46Zm2.68-4.57h.61l1.25,4h.32l1.25-4h.6L36.2,46H35.1ZM43.91,46v-.52H41.2V43.89h2.1v-.52H41.2V42h2.61v-.52H40.62V46Zm6.87-4.57V46h-.91l-2.12-3.82h-.14V46H47V41.43H48l2.13,3.82h.14V41.43Zm5,.51h1.5v-.51H53.73v.51h1.51V46h.58Z"
                    style={{ fill: 'none', stroke: '#1d1f1c', strokeWidth: 1, strokeMiterlimit: 10 }}/>
                <defs>

                    <clipPath id="clip-path">
                        <path
                            d="M29.19,6.12l8-1.35V32.31l-8-1.36ZM25.77,2.71V34.37l14.84,2.71V0ZM69.23,18.2v3.41h4.65v9.33H65.47V6.12h7.2V11.2h3.41V2.71h-14V34.35H77.29V18.2ZM11.61,28.09l0,.08q2.8-12.78,5.6-25.46h5.12V34.35H18.94V9.63c-.05,0-5.69,24.74-5.69,24.74H10S4.33,9.63,4.28,9.63V34.35H.86V2.71H6q2.79,12.66,5.61,25.46Zm43.32-22H44.44V2.71H58.63V6.12L48.14,30.94H58.63v3.41H44.44V30.94Zm29.2,28.23H80.71V2.71h3.42ZM31,46v-.52H28.25V43.89h2.1v-.52h-2.1V42h2.61v-.52H27.68V46Zm2.68-4.57h.61l1.25,4h.32l1.25-4h.6L36.2,46H35.1ZM43.91,46v-.52H41.2V43.89h2.1v-.52H41.2V42h2.61v-.52H40.62V46Zm6.87-4.57V46h-.91l-2.12-3.82h-.14V46H47V41.43H48l2.13,3.82h.14V41.43Zm5,.51h1.5v-.51H53.73v.51h1.51V46h.58Z"
                            style={{ fill: 'none', stroke: '#1d1f1c', strokeWidth: 1, strokeMiterlimit: 10 }}/>
                    </clipPath>
                </defs>
                <g clipPath={"url(#clip-path)"} >
                    <rect className="path_bg" width="100%" height="100%" y="100%" fill="#000"></rect>
                </g>
            </svg>
        </a>
    )
};

export default Logo;
