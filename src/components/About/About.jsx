import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WebsiteIcon from '@material-ui/icons/Language'
import './About.css'
import about from '../../img/about.png'

const About = () => {
  const { name, role, description, resume, social } = {
    name: 'Muniira',
    role: 'Designer & Developer',
    description:
      "As a creative and passionate Designer and Developer, I embody a unique blend of creative vision and technical expertise. With a keen eye for aesthetics and a passion for problem-solving. My journey encompasses a deep understanding of design principles and proficiency in various programming languages and development tools.",
    social: {
      github: 'https://github.com/muniishaofficiall',
      website: 'https://muniishaofficiall.com/',
    },
  }

  return (
    <div className='main__about'>
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
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

            {social.website && (
              <a
                href={social.website}
                aria-label='website'
                className='link link--icon'
              >
                <WebsiteIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
    <img src={about} className='about__img' alt="about" style={{width: "35%"}} />
    </div>
  )
}

export default About
