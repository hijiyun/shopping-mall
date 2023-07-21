import { useState } from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import data from "./data";
import Item from "./components/Item";
import Header from "./components/Header"


function App() {
  let [shopItem] = useState(data);


  return (
    <>
    <Header />
    <div className='main-bg'></div>
    <div className='main2'>
    <Container className='items'>
      <div className='main2-text'>
        <h2>WEEKLY BEST ITEM</h2>
        <p class="sub">ღ 클라우드이모션이 사랑받는 아이템 ღ</p>
      </div>
      <Item />
    </Container>
    </div>
    </>
  );
}

export default App;
