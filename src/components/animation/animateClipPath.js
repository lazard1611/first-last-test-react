import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../animation/animation.scss';

const AnimateClipPath = () => {
    useEffect(() => {
        const tl = gsap.timeline({paused: false});
        tl
            .fromTo(".animate",
                {
                    clipPath: 'polygon(0% 0%, 57% 0%, 75% 100%, 0% 100%)',
                },{
                    duration: 0.8,
                    xPercent: 100,
                    ease: "power2.out",
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                })
            .to('.animate_state', {opacity: 1})
            .to(".animate", {
                duration: 0.8,
                xPercent: 210,
                ease: "power2.out",
            })

    }, []);

    return <div className="animate"></div>;
};

export default AnimateClipPath;
