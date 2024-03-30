import Navbar from '../Navbar/Navbar'
import './Header.css'
import logo from '../../img/logo2.png'


const Header = () => {
  const { homepage, title } = {
    homepage: '#',
    title: 'Munisha',
  }

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className=''>
            {/* {title} */}
            <img src={logo} alt="logo" width={200} />
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
