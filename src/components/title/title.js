import React, {useEffect} from "react";
import gsap from 'gsap';
import './title.scss';

const Title = ({label}) => {
    useEffect(() => {
        let mm = gsap.matchMedia();

        function parallaxEl(e) {
            this.querySelectorAll('.js-parallax').forEach((item) => {
                const speed = item.getAttribute('data-speed');
                const x = (window.innerWidth - e.pageX*speed)/150;
                const y = (window.innerHeight - e.pageY*speed)/150;
                item.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }

        mm.add('(min-width: 1200px)', () => {
            document.addEventListener('mousemove', parallaxEl);

        })

        mm.add('(max-width: 1199px)', () => {
            document.removeEventListener('mousemove', parallaxEl);
        })
    },[]);

    return (
        <h1 className="title js-parallax" data-speed="2">{label}</h1>
    )
};

export default Title;
