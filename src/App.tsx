import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './First/First';
import Second from "./Second/Second";
import ArticleOne from "./ArticleOne/Article";
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import Business from "./Business/Business";
import Sticker from "./Sticker/Sticker";
import Download from "./Download/Download";

function App() {
  return (
    <div className="App">
        <Header/>
<First/>
        <Second/>
        <Business/>
        <ArticleOne  img='UI/invest.png' left={0} header='Invest!' text='orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor dolor ipsum, sit amet hendrerit ante finibus in. Suspendisse accumsan nisl dictum urna mattis consectetur.'/>

        <Sticker/>
        <ArticleOne  img='UI/nine.png' left={1} header='9% CashBack' text='orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor dolor ipsum, sit amet hendrerit ante finibus in. Suspendisse accumsan nisl dictum urna mattis consectetur.'/>

        <Download/>



<Footer/>

    </div>
  );
}

export default App;
