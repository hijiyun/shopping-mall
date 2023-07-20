import './App.css';
import { Navbar,Container,Nav,Row,Col } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";


function App() {
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
                  <a href="#">notice</a>
                  <a href="#">QnA</a>
                  <a href="#">review</a>
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
                <a href="#" alt="돋보기"><CiSearch color='black' /></a>
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
    <div className='main-bg'></div>
    <div className='main2'>
    <Container className='items'>
      <div className='main2-text'>
        <h2>WEEKLY BEST ITEM</h2>
        <p class="sub">ღ 클라우드이모션이 사랑받는 아이템 ღ</p>
      </div>
      <Row>
        <Col>
          <a href="#">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/medium/202306/1c49cb28b5d836f13873fb1879ce1b0b.webp" alt="사진1" />
            <div className='desc'>
              <strong>[MD pick] 글램핏 데일리 T</strong>
              <span>27,600원</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/medium/202307/403cb649e88101eb5f00c375e291858a.webp" alt="사진2" />
            <div className='desc'>
              <strong>[MD pick] 글램핏 데일리 T</strong>
              <span>27,600원</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/medium/202305/d99aaee08c94b35c0cdf9c577de1265e.webp" alt="img3" />
            <div className='desc'>
              <strong>[MD pick] 글램핏 데일리 T</strong>
              <span>27,600원</span>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
}

export default App;
