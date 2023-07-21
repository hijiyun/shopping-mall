import React from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";



const Header = () => {
  return (
    <>
    <div className="header">
      <Navbar bg="light" data-bs-theme="light" id='nav'>
        <Container id='nav-container'>
          {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
          <Nav className="me-auto">
            <div className='nav-left'>
            <Nav.Link href="#features">
            <a className='nav-insta' href="https://www.instagram.com/j___y______/">INSTAGRAM</a>
            </Nav.Link>
            <Nav.Link href="#">
              <div className='dropdown'>
                <div className='nav-community'>COMMUNITY</div>
                <div className='community-content'>
                  <a href="#home">notice</a>
                  <a href="#home">QnA</a>
                  <a href="#home">review</a>
                </div>
              </div>
            </Nav.Link>
            </div>
            <Nav.Link href="#home" className='logo'>
              <a href="#home">
                <img src="https://cloudemotion.kr/web/mobile/newDesign/0571dd857814e10de79bba8341d1a95f.png" alt="logo" />
              </a>
            </Nav.Link>
            <div className='nav-right'>
              <Nav.Link href="#features" className='login'>LOGIN</Nav.Link>
              <Nav.Link href="#pricing" className='cart'>CART</Nav.Link>
              <Nav.Link href="#pricing" className='search'>
                <a href="#home" alt="돋보기"><CiSearch color='black' /></a>
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
    </>
  )
}

export default Header;