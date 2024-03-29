import {useContext} from "react";
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import {ThemeContext} from "../../contexts/theme";
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about;
  const [{ themeName }] = useContext(ThemeContext);
  const isDarkTheme = themeName === "dark";
  return (
    <div className='about center'>
      {social && (
        <>
          {social.avatar && (
            <img className={`about__avatar ${isDarkTheme ? "about__grayscale" : ""}`} alt='avatar' src={social.avatar} />
          )}
        </>
      )}

      {name && (
        <h2>
          Moin*, I am <span className='about__name'>{name}.</span>
        </h2>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
            {social.twitter && (
              <a
                  href={social.twitter}
                  aria-label='twitter'
                  className='link link--icon'
              >
                  <TwitterIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
