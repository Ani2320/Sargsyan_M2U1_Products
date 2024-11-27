import Root from '../Root'
import { Container, Row } from 'react-bootstrap'
import '../styles/header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import logout from '../assets/logout.png'

function Header(props) {

  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const Logout = () =>{
    setUser({name:""})
    navigate('/');
  }

  return (
    <header>
      <Container fluid className=''> 
        <Row className = "bg-dark text-white">
          <nav className = 'navigator flex ai-c p-5'>
            <div className='space-navitems'>
              <NavLink  className={"navigation-link"} 
                to='/'> Página principal con logo </NavLink>
              {user.name !== "" ? <NavLink to='/products' className={"navigation-link"}> Productos </NavLink> : null} 
            </div>
            {user?.name !== "" ?

            <div className='flex ai-c'>
              <span className='mr-10'>{user?.name}</span>
              <div onClick={Logout}>
                <img src = {logout} alt = "logout logo" title='Logout' />
              </div>
            </div>
            :
            <NavLink to='/login' className={"navigation-link"}> <span className = "fr mr-0">Login</span> </NavLink>}
          </nav>
        </Row>    
        </Container>
        
    </header>
  )
}

export default Header