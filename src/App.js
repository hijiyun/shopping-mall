import './App.css';
import { Button,Navbar,Container,Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="header">
      <Navbar bg="light" data-bs-theme="light" id='nav'>
        <Container id='nav-container'>
          {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#69c037tures">
            <a href="https://www.instagram.com/j___y______/">instagram</a>
            </Nav.Link>
            <Nav.Link href="#home">
              <a href="#home">
                <img src="https://cloudemotion.kr/web/mobile/newDesign/0571dd857814e10de79bba8341d1a95f.png" alt="logo" />
              </a>
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Button variant="primary">Primary</Button>{' '}
    </div>
  );
}

export default App;
