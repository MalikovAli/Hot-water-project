import React from 'react'
import { NavLink } from "react-router-dom";
import ContactSection from './ContactSection.jsx';

const WaterComposition = () => {
  return (
    <section>
      <div className="water-composition-content-box">
        <div className="water-sorce-link-boxes">
          <NavLink
            to="/water-source"
            className="water-source-link-box"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #00ad50" : "none"
            })}
          >
            <span className="water-source-link">“İstisu” mənbəyi</span>
          </NavLink>

          <NavLink
            to="/water-composition"
            className="water-source-link-box"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #00ad50" : "none"
            })}
          >
            <span className="water-source-link">Suyun tərkibi</span>
          </NavLink>

        </div>
        <h2 className='water-composition-heading1'>Tədqiqat nəticələri</h2>
        <p className='water-composition-content1'>“İstisu” mineral suyu unikal təbii şəraitdə yaranan zəngin və balanslaşdırılmış tərkibə malikdir. Suyun tərkibi yerli laboratoriyalar və Azərbaycan Respublikasının səlahiyyətli dövlət qurumları tərəfindən, həmçinin Almaniyanın SGS Institute Fresenius GmbH laboratoriyası tərəfindən tədqiq olunub. Azərbaycan Respublikasının bir sıra aidiyyəti dövlət qurumları və yerli elmi tədqiqatçılar tərəfindən suyun tərkibi tədqiq edilmişdir. Bundan əlavə, suyun tərkibi ilə bağlı balneologiya sahəsində ixtisaslaşmış xarici təşkilat və mütəxəssislər tərəfindən rəylər bildirilmişdir: professor, tibb elmləri doktoru Kristof Qutenbranner, Hannover Reabilitasiya Xidməti və Elmi Konsaltinq GbR (Almaniya); professor, doktor Müfit Zeki Karagülle, Tibbi Ekologiya və Hidroklimatologiya üzrə fəxri professor, Türkiyənin Kurort Tibbi və Balneologiya Assosiasiyasının sədri (Türkiyə).</p>
        <p className='water-compisition-link-box1'>
          <a className='water-composition-link' href="">Doktor Kristof Qutenbrannerilə müsahibəyə baxmaq üçün</a>
        </p>
        <p className='water-compisition-link-box2'>
          <a className='water-composition-link' href="">Doktor Müfit Zeki Karagülle müsahibəyə baxmaq üçün</a>
        </p>
        <h3 className='water-compositon-heading2'>Suyun tərkibi</h3>
        <table>
          <thead>
            <tr>
              <th>Komponent</th>
              <th>Konsentrasiya</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HCO₃⁻</td>
              <td>2720-3320 mq/l</td>
            </tr>
            <tr>
              <td>SO₄²⁻</td>
              <td>750-920 mq/l</td>
            </tr>
            <tr>
              <td>Cl⁻</td>
              <td>240-290 mq/l</td>
            </tr>
            <tr>
              <td>Ca²⁺</td>
              <td>110-140 mq/l</td>
            </tr>
            <tr>
              <td>Na⁺</td>
              <td>1360-1670 mq/l</td>
            </tr>
            <tr>
              <td>Mg²⁺</td>
              <td>20-30 mq/l</td>
            </tr>
          </tbody>
        </table>
        <p className='water-composition-content2'>Ümumi minerallaşma: 5-6 q/l</p>
        <div className='water-compisition-image'></div>
      </div>
      <ContactSection />
    </section>
  )
}

export default WaterComposition