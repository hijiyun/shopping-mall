import { useState } from 'react';
import './App.css';
import { Navbar,Container,Nav,Row,Col } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
import data from "./data"
import Main2 from "./components/Main2"


function App() {
  let [shopItem] = useState(data); 


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
    <div className='main-bg'></div>
    <div className='main2'>
    <Container className='items'>
      <div className='main2-text'>
        <h2>WEEKLY BEST ITEM</h2>
        <p class="sub">ღ 클라우드이모션이 사랑받는 아이템 ღ</p>
      </div>
      <Main2 />
      {/* <Row>
        <Col>
          <a href="#home">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/medium/202306/1c49cb28b5d836f13873fb1879ce1b0b.webp" alt="사진1" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#FEC0CB'}}></div>
              <div className='color' style={{backgroundColor:'#000000'}}></div>
              <div className='color' style={{backgroundColor:'#FEFFEF'}}></div>
              <div className='color' style={{backgroundColor:'#C7A5D1'}}></div>
              <strong className='main2-name'>{data[0].title}</strong>
              <span>{data[0].price}</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#home">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/medium/202307/403cb649e88101eb5f00c375e291858a.webp" alt="사진2" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#000000'}}></div>
              <div className='color' style={{backgroundColor:'#4A4A4A'}}></div>
              <strong className='main2-name'>{data[1].title}</strong>
              <span>{data[1].price}</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#home">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/big/202306/5dec647b832570dfee3c7ee91228faa9.webp" alt="img3" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#FEFFEF'}}></div>
              <strong className='main2-name'>{data[2].title}</strong>
              <span>{data[2].price}</span>
            </div>
          </a>
        </Col>
      </Row>
    </Container>

    <Container className='items'>
      <Row>
        <Col>
          <a href="#home">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/medium/202306/b6396e141672b50494f128af44d3f5ec.webp" alt="사진1" />
            <div className='desc'>
            <div className='color' style={{backgroundColor:'#E0CEB6'}}></div>
              <strong className='main2-name'>{data[3].title}</strong>
              <span>{data[3].price}</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#home">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/big/202305/bab20cdca05effb5a4372301af87f905.webp" alt="사진2" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#4A66A8'}}></div>
              <strong className='main2-name'>{data[4].title}</strong>
              <span>{data[4].price}</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#home">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/big/202305/8a5296e46a486a51da007321f094aed2.webp" alt="img3" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#A0A6D6'}}></div>
              <strong className='main2-name'>{data[5].title}</strong>
              <span>{data[5].price}</span>
            </div>
          </a>
        </Col>
      </Row>
    </Container>

    <Container className='items'>
      <Row>
        <Col>
          <a href="#home">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/big/202306/93815e4d1111151028952bbc351f685a.webp" alt="사진1" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#000000'}}></div>
              <div className='color' style={{backgroundColor:'#CCB89D'}}></div>
              <div className='color' style={{backgroundColor:'#FEC0CB'}}></div>
              <div className='color' style={{backgroundColor:'#F5F5F5'}}></div>
              <strong className='main2-name'>{data[6].title}</strong>
              <span>{data[6].price}</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#home">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/big/202304/6483780e2698e410509aac0414238de6.webp" alt="사진2" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#1E60A6'}}></div>
              <strong className='main2-name'>{data[7].title}</strong>
              <span>{data[7].price}</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#home">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/big/202307/5262062f463b9aadfe1c727ba2426481.webp" alt="img3" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#000000'}}></div>
              <div className='color' style={{backgroundColor:'#CCBAA6'}}></div>
              <div className='color' style={{backgroundColor:'#FEC0CB'}}></div>
              <strong className='main2-name'>{data[8].title}</strong>
              <span>{data[8].price}</span>
            </div>
          </a>
        </Col>
      </Row> */}
    </Container>
    </div>
    </>
  );
}

export default App;
