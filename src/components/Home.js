import React from 'react'
import Topbar from './Topbar';
import Footer from './Footer';
import '../App.css';
//import logo from '../logo.svg';


const Home = () => {
    
    document.body.style.overflow = 'hidden';
    
    return (
    <div>
        <Topbar />
        <header className="App-header">
            <img src="http://cs.kmutnb.ac.th/img/Personnel/swk.jpg" className="App-logo" alt="logo" />
            <p>
            <div className = "App-link ">Numerical React Project</div> 
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            อาจารย์ที่ปรึกษา ผศ. ดร.สุวัจชัย กมลสันติโรจน์
            </a>
        </header>
        <Footer />
  
    </div>
  );
}

export default Home;