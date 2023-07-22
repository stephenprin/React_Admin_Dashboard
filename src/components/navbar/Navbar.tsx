import './navbar.scss'
import logo from '/public/logo.svg';
import search from '/public/search.svg';
import app from '/public/app.svg';
import expand from '/public/expand.svg';
import settings from '/public/settings.svg';
import notifications from '/public/notifications.svg';
import user from '/public/user.svg';
const Navbar = () => {
  return (
    <div className='navbar'>
          <div className='logo'>
              {/* <img src={logo} alt="logo" /> */}
              <span>IADMIN</span>
          </div>
          <div className='icons'>
              <img src={search} alt="search" className='icon'/>
              <img src={app} alt="app" className='icon' />
              <img src={expand} alt="expand" className='icon' />
              <div className='notification'>
                  <img src={notifications} alt="notify" className='icon' />
                  <span>1</span>
              </div>
              <div className='user'>
                  <img src='https://th.bing.com/th/id/OIP.8qVP2H4_wHH9hQgqzGg8fQHaHa?pid=ImgDet&rs=1' alt='user' />
                  <span>Prince</span>
              </div>
              <img src={settings} alt="settings" className='icon' />
          </div>
    </div>
  )
}

export default Navbar
