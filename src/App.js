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
              <div className='color' style={{backgroundColor:'#FEC0CB'}}></div>
              <div className='color' style={{backgroundColor:'#000000'}}></div>
              <div className='color' style={{backgroundColor:'#FEFFEF'}}></div>
              <div className='color' style={{backgroundColor:'#C7A5D1'}}></div>
              <strong className='main2-name'>[MD pick] 글램핏 데일리 T</strong>
              <span>27,600원</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/medium/202307/403cb649e88101eb5f00c375e291858a.webp" alt="사진2" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#000000'}}></div>
              <div className='color' style={{backgroundColor:'#4A4A4A'}}></div>
              <strong className='main2-name'>[MD pick] 도쿄 in 워싱 T</strong>
              <span>32,400원</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/big/202306/5dec647b832570dfee3c7ee91228faa9.webp" alt="img3" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#FEFFEF'}}></div>
              <strong className='main2-name'>네스 트위드 점프수트 PT (벨트SET)</strong>
              <span>39,800원</span>
            </div>
          </a>
        </Col>
      </Row>
    </Container>

    <Container className='items'>
      <Row>
        <Col>
          <a href="#">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/medium/202306/b6396e141672b50494f128af44d3f5ec.webp" alt="사진1" />
            <div className='desc'>
            <div className='color' style={{backgroundColor:'#E0CEB6'}}></div>
              <strong className='main2-name'>[솜다 pick] 비엔나 슈브 롱 랩 SK</strong>
              <span>32,300원</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/big/202305/bab20cdca05effb5a4372301af87f905.webp" alt="사진2" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#4A66A8'}}></div>
              <strong className='main2-name'>[MD pick] 크레디앙 데님 탑 OPS</strong>
              <span>43,000원</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/big/202305/8a5296e46a486a51da007321f094aed2.webp" alt="img3" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#A0A6D6'}}></div>
              <strong className='main2-name'>[솜다 pick] 홀리키 4피스 비키니 SET</strong>
              <span>36,000원</span>
            </div>
          </a>
        </Col>
      </Row>
    </Container>

    <Container className='items'>
      <Row>
        <Col>
          <a href="#">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/big/202306/93815e4d1111151028952bbc351f685a.webp" alt="사진1" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#000000'}}></div>
              <div className='color' style={{backgroundColor:'#CCB89D'}}></div>
              <div className='color' style={{backgroundColor:'#FEC0CB'}}></div>
              <div className='color' style={{backgroundColor:'#F5F5F5'}}></div>
              <strong className='main2-name'>[솜다 pick] 울 스킨 백 홀 스트링 T</strong>
              <span>24,000원</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/big/202304/6483780e2698e410509aac0414238de6.webp" alt="사진2" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#1E60A6'}}></div>
              <strong className='main2-name'>[솜다 pick] 딥블루 워싱 하이 부츠컷 PT</strong>
              <span>46,000원</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className='main2-img' src="https://cloudemotion.kr/web/product/big/202307/5262062f463b9aadfe1c727ba2426481.webp" alt="img3" />
            <div className='desc'>
              <div className='color' style={{backgroundColor:'#000000'}}></div>
              <div className='color' style={{backgroundColor:'#CCBAA6'}}></div>
              <div className='color' style={{backgroundColor:'#FEC0CB'}}></div>
              <strong className='main2-name'>[ ♡MADE♡ ] tutu off shirring T + 타이 SET (ss.ver)</strong>
              <span>40,000원</span>
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
