import uniqid from 'uniqid'
import './Skills.css'

const skills = [
  'Illustrator',
  'Photoshop',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Python',
  'Java',
]

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>My Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
