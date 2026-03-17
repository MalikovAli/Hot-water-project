import React from 'react'
import { Link } from "react-router-dom";
import ContactSection from './ContactSection.jsx';

const BenefitsSection = () => {
  return (
    <section>
      <div className="benefits-box">
      <div className="benefit-image-box">
        <img className='benefit-image' src="src/image/bottleimage.png" alt="" />
        <div className="benefit-content-box">
        <h2 className='benefit-heading'>Faydalı xüsusiyyətlər</h2>
        <p className='benefit-content'>Elmi tədqiqatlar “İstisu” mineral suyunda mövcud olan mineralların orqanizmin bir sıra funksiyalarına müsbət təsir göstərdiyini sübut edir. Təbii mineral su “İstisu” aşağıdakı fizioloji, metabolik və faydalı xüsusiyyətlərə malikdir:</p>
        <ul className='benefit-ul'>
          <li>mədə-bağırsaq funksiyasını yaxşılaşdırır;</li>
          <li>həzm prosesini və turşu-qələvi balansını normallaşdırır;</li>
          <li>metabolizmi yaxşılaşdırır;</li>
          <li>şəkərli diabetdə şəkər səviyyəsini normallaşdırmağa kömək edir;</li>
          <li>artıq çəki problemlərinin həllində kömək edir;</li>
          <li>sümüklərin sağlamlığını dəstəkləyir;</li>
          <li>podaqra və oynaq ağrılarının kəskinləşməsinə mane olur;</li>
          <li>böyrəklərdə və sidik kisəsində daşların yaranması riskini azaldır;</li>
          <li>ürək-damar xəstəlikləri və hipertenziya riskini azaldır;</li>
          <li>qan təzyiqini normallaşdırır;</li>
          <li>qəbizlik və qıcıqlanmış bağırsaq sindromunun aradan qaldırılmasına kömək edir;</li>
          <li>öd kisəsi və kanallarının funksionallığını normallaşdırmağa kömək edir;</li>
          <li>maye və elektrolit balansını tənzimləyir, hidratasiyanın optimal səviyyəsini qoruyur;</li>
          <li>fiziki fəaliyyətdən sonra mineralların bərpasına kömək edir;</li>
          <li>yaşlanma prosesini ləngidir;</li>
          <li>antioksidant təsir göstərir.</li>
        </ul>
      </div>
      </div>
      </div>
      <ContactSection/>
    </section>
  )
}

export default BenefitsSection