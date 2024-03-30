import LocationIcon from '@material-ui/icons/LocationCity'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/PhoneInTalk'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YoutubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import './Contact.css'

const contact = {
  email: 'muniishaofficiall@gmail.com',
  phone: '+252 614912016 / +252 617378382',
  address: 'Hodan District, Mogadishu - Somalia',
}

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact Me</h2>
      <div className="contact-info">
        <div className="listing-box">
            <ul>
            <li>
              <span>
                <LocationIcon />
              </span>
              <span style={{fontSize: "16px"}}>{contact.address}</span>
            </li>
            <li>
              <span>
                  <EmailIcon />
              </span>
              <span style={{fontSize: "16px"}}>
                {contact.email}
              </span>
            </li>
            <li>
              <span>
                <PhoneIcon />  
              </span>
              <span style={{fontSize: "16px"}}>
                {contact.phone}
              </span>
            </li>
            <li></li> 
            </ul>	
        </div>	
        <div className="social-icons center">
          <ul>
            <li>
              <a href="#"><FacebookIcon /></a>
            </li>
            <li>
              <a href="#"><TwitterIcon /></a>
            </li>
            <li>
              <a href="#"><InstagramIcon /></a>
            </li>
            <li>
              <a href="#"><LinkedInIcon /></a>
            </li>
            <li>
              <a href="#"><YoutubeIcon /></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
