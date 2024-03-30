import uniqid from 'uniqid'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import quiz from '../../img/quiz.jpg'
import brand from '../../img/brand.png'
import ecommerce from '../../img/ecommerce.png'

const projects = [
  {
    name: 'Quiz Application',
    description:
      'I have build a quiz application where users can answer multiple-choice questions and receive a score at the end',
    image: quiz,
    stack: ['Python', 'Flask'],
    sourceCode: 'https://github.com/muniishaofficial',
    livePreview: 'https://github.com/muniishaofficial',
  },
  {
    name: 'Home Peace Brand',
    description:
      'I have created a complete brand design for Home Peace company that involves crafting a visual identity to its target audience',
    image: brand,
    stack: ['Illustrator', 'Photoshop'],
    sourceCode: 'https://github.com/muniishaofficial',
    livePreview: 'https://github.com/muniishaofficial',
  },
  {
    name: 'E-commerce Website',
    description:
      'I have build an online store with features like product listings, search functionality, user authentication, and shopping cart',
    image: ecommerce,
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/muniishaofficial',
    livePreview: 'https://github.com/muniishaofficial',
  },
]

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>My Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
