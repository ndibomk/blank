import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {MdPeopleAlt} from 'react-icons/md'
import {MdArticle} from 'react-icons/md'
import {SlDocs} from 'react-icons/sl'
import {AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai'
import {RxExternalLink} from 'react-icons/rx'
import {CgMail} from 'react-icons/cg'
import {FiPhoneCall} from 'react-icons/fi'
import {BsChatText} from 'react-icons/bs'
function Header() {
  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <Link  to='/' className='nav-text' >Peter Gachau</Link>
        <div className="dot">.............................</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:'white'}} />
        <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor:'',display:'flex'}}>
          <Nav className="me-auto">
          <Link className='link' to='/about'> <MdPeopleAlt/> About</Link>
          <Link className='link' to='/resume'><MdArticle/> Resume</Link>
          <Link className='link' to='/projects'> <SlDocs color='white'/> Projects</Link>
         <a href="https://github.com/petergachau"><AiFillGithub/> Github <RxExternalLink/></a>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <div className="dot">................</div>
           <a href="https://wa.me/0757198515">
            <AiOutlineWhatsApp/></a>
            <a href="mailto:petergachau57@gmail.com">
            <CgMail/></a> 
            <a href="tel:0757198515">
            <FiPhoneCall/></a> 
            <a href="sms:+254757198515&amp;body= I%27d%20like%20to%20set%20up%20an%20appointment%20for...">
              <BsChatText/></a> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;