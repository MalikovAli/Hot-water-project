import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import Hero from "./components/Hero";
import CompanyHistory from "./components/CompanyHistory";
import MineralInfoSection from "./components/MineralInfoSection";
import ProductsIntro from "./components/ProductsIntro";
import UniqueMineralSection from './components/UniqueMineralSection';
import SocialGallerySection from './components/SocialGallerySection';
import ContactSection from './components/ContactSection';
import BenefitsSection from './components/BenefitsSection';
import WaterSource from './components/WaterSource';
import WaterComposition from './components/WaterComposition';
import ContactUs from './components/ContactUs';

import "./css/Hero.css";
import './App.css';
import './css/CompanyHistory.css';
import './css/MineralInfoSection.css';
import './css/ProductsIntro.css';
import './css/UniqueMineralSection.css';
import './css/SocialGallerySection.css';
import './css/ContactSection.css';
import './css/BenefitsSection.css'
import './css/WaterSource.css';
import './css/WaterComposition.css';
import './css/ContactUs.css';

const Home = () => {
  return (
    <>
      <Hero />
      <CompanyHistory />
      <MineralInfoSection />
      <ProductsIntro />
      <UniqueMineralSection />
      <SocialGallerySection />
      <ContactSection />
    </>
  )
}
const App = () => {
  return (
    <div className="body">


      <div className="subheader">
        <div className="contact-box">
          <span className='contact-content'>Azərbaycan, Kəlbəcər rayonu, İstisu qəsəbəsi</span>
          <span className='contact-number'>*0032</span>
        </div>
        <div className="subheader-icon-boxes">
          <div className="subheader-icon-box">
            <i class="fa-brands fa-facebook-f subheader-icon"></i>
          </div>
          <div className="subheader-icon-box">
            <i class="fa-brands fa-instagram subheader-icon"></i>
          </div>
          <div className="subheader-icon-box">
            <i class="fa-brands fa-linkedin subheader-icon"></i>
          </div>
          <div className="subheader-icon-box">
            <i class="fa-brands fa-youtube subheader-icon"></i>
          </div>
        </div>
        <div className="flag">
          <img className='azerbaijan-flag' src="src/image/8-photoaidcom-cropped.png" alt="flag1" />
          <span className='az'>AZ</span>
          <i class="fa-solid fa-angle-down down"></i>
        </div>
      </div>

      <nav>
        <div className="hot-water-heading">
          <div className="hot-water-image-box">
            <img className='hot-water' src="src/image/lastlogo.bc5a13fc.png" alt="" />
          </div>
          <ul className='hot-water-heading-ul'>
            <Link to="/about">Haqqımızda</Link>
            <Link to="/benefits">Faydalar</Link>
            <Link to="/water-source">Su yatağı</Link>
            <Link to="/products">Məhsullar</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact-us">Əlaqə</Link>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<BenefitsSection />} />
        <Route path="/water-source" element={<WaterSource />} />
        <Route path="/water-composition" element={<WaterComposition />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>


      <div className="footer-boxes">
        <div className="footer-content-box">
          <div className="footer-image-box">
            <img className='footer-image' src="src/image/lastlogo.bc5a13fc.png" alt="" />
            <p className='footer-image-box-content'>Təbii xəzinə</p>
          </div>
          <div className="footer-content-boxes">
            <div className="footer-content-box1">
              <span className='footer-content1'>E-poçt:</span>
              <a className='footer-link1' href="">info@istisu.com</a>
            </div>
            <div className="footer-content-box2">
              <span className='footer-content2'>Telefon nömrəsi:</span>
              <a className='footer-link2' href="">*0032</a>
            </div>
            <div className="footer-icon-boxes">
              <div className="footer-icon-box">
                <i class="fa-brands fa-facebook-f footer-icon"></i>
              </div>
              <div className="footer-icon-box">
                <i class="fa-brands fa-instagram footer-icon"></i>
              </div>
              <div className="footer-icon-box">
                <i class="fa-brands fa-linkedin footer-icon"></i>
              </div>
              <div className="footer-icon-box">
                <i class="fa-brands fa-youtube footer-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <p className='footer-content3'>© 2024 "İstisu" mineral su zavodu. Bütün hüquqlar qorunur.</p>
      </div>

    </div>
  )
}
export default App