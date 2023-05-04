import { Chrono } from "react-chrono";
import {useEffect, useState} from "react";
import {experiences} from '../../portfolio';
import './Experience.css';

const chronoTheme = {
    primary: "var(--clr-fg-alt)",
    cardBgColor: 'var(--clr-bg-alt)',
    cardTitleColor: 'var(--clr-fg-alt)',
    cardSubtitleColor: 'var(--clr-fg)',
    cardForeColor: 'var(--clr-fg-alt)',
    detailsColor: 'var(--clr-fg)',
    titleColor: 'var(--clr-fg-alt)'
};

const classNames = {card: 'experienceCard', cardTitle: "title", cardSubTitle: "title"};

const Experience = () => {
    if (experiences.length <= 0) return null

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
    console.log(chronoTheme)
    return (
        <section className='section experience' id='experience'>
            <h2 className='section__title'>Experience</h2>
            <Chrono theme={chronoTheme} classNames={classNames} items={experiences}
                    disableNavOnKey disableAutoScrollOnClick disableClickOnCircle hideControls activeItemIndex
                    mode={!isMobile ? "VERTICAL_ALTERNATING" : "VERTICAL"}>
                <div className="chrono-icons">
                    {experiences.map((experience) => <img className="icon" src="/tectumHOME%20GmbH.svg" alt={`Icon for ${experience.cardTitle}/${experience.cardSubtitle}`}/>)}
                </div>
            </Chrono>
        </section>
    )
}

export default Experience;