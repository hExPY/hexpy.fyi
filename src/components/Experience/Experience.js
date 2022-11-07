import { Chrono } from "react-chrono";
import {useEffect, useState} from "react";
import { experience } from '../../portfolio';
import './Experience.css';

const chronoTheme = {
    primary: '#bdbddd',
    cardBgColor: 'var(--clr-bg-alt);',
    titleColor: '#bdbddd',
}

const Experience = () => {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    console.log(isMobile)
    return (<section className='section experience' id='experience'>
        <h2 className='section__title'>Experience</h2>
        <Chrono theme={chronoTheme} classNames={{card: 'experienceCard', controls: ""}} items={experience}
                disableNavOnKey disableAutoScrollOnClick disableClickOnCircle hideControls activeItemIndex
                mode={!isMobile ? "VERTICAL_ALTERNATING" : "VERTICAL"}/>
    </section>)

}

export default Experience;