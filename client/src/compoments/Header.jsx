import {useEffect} from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';
import {LinkContainer} from 'react-router-bootstrap';
import AOS from 'aos';
const Header = () => {
  useEffect(()=>{
    AOS.init({
      offset: 400,
      duration: 1400,
      easing: 'ease'
    });
  },[])
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand='lg' collapseOnSelect>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand > <img src={logo} alt="" />App</Navbar.Brand>
               </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse aria-controls='basic-navbar-nav'>
                    <Nav className='ms-auto' data-aos="fade-right">
                    <LinkContainer to="/login">
                        <Nav.Link ><FaUser />Sign in</Nav.Link> 
                     </LinkContainer> 
                     <LinkContainer to="/cart"> 
                        <Nav.Link ><FaShoppingCart className='py-1'/>cart</Nav.Link>
                       </LinkContainer>     
                    </Nav>
                 </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header