import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ContactSection from './ContactSection.jsx';

const WaterSource = () => {

  const [active, setActive] = useState(1)

  return (
    <section>
      <div className="water-source-content-box">
        <div className="water-sorce-link-boxes1">

          <div className="water-source-link-box">
            <Link
              to="/istisu-source"
              className="water-source-link"
              onClick={() => setActive(1)}
              style={{ color: active === 1 ? "#00ad50" : "#8d8d8d" }}
            >
              “İstisu” mənbəyi
            </Link>
          </div>

          <div className="water-source-link-box">
            <Link
              to="/water-composition"
              className="water-source-link"
              onClick={() => setActive(2)}
              style={{ color: active === 2 ? "#00ad50" : "#8d8d8d" }}
            >
              Suyun tərkibi
            </Link>
          </div>

        </div>

        <h2 className='water-source-heading'>“İstisu” mənbəyi</h2>

        <p className='water-source-content'>
          Azərbaycanın Kəlbəcər rayonunda yerləşən “İstisu” mineral su mənbələri adətən dünyanın məşhur termal su mənbələri ilə müqayisə edilir. Kəlbəcərin isti su mənbələri faydalı elementlərlə zəngin olmaqla yanaşı, həm də özünəməxsus xüsusiyyətləri ilə seçilir. “Aşağı İstisu” termal-mineral su yatağından çıxan suyun temperaturu 60°C-dən yuxarıdır, bu da öz növbəsində mineralların suda daha asan həll olmasına və zəngin mineral tərkibli suyun yaranmasına səbəb olur. Regionun əsas xüsusiyyətlərindən biri bənzərsiz təbiət hadisəsi hesab olunan isti mineral suyun yerdən çıxması nəticəsində termal su mənbələrinin yaranmasıdır. Bu termal su mənbələri əsrlər boyu bir sıra faydalı xüsusiyyətləri ilə tanınıb. “İstisu” mineral suyu öz başlanğıcını Azərbaycanın Kəlbəcər rayonunun mənzərəli dağlıq bölgəsində, dəniz səviyyəsindən 1600 metrdən çox yüksəklikdə yerləşən bənzərsiz təbii mənbədən götürür. Regionun unikal təbii şəraiti təbii xəzinə hesab olunan minerallarla zəngin suyun yaranmasına səbəb olur.
        </p>

        <div className="water-source-image-box">
          <img className='water-source-image' src="src/image/image.webp" alt="" />
        </div>

      </div>
      <ContactSection/>
    </section>
  )
}

export default WaterSource