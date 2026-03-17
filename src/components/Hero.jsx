import React from 'react'

const Hero = () => {
  return (
    <section>
      <nav>
        <div className="hot-water-biography">
          <div className="hot-water-biography-content-box">
            <h2 className='hot-water-biography-content-heading'>Təbii xəzinə</h2>
            <p className='hot-water-biography-content'>Kəlbəcərin təbii termal su mənbəyindən çıxan minerallarla zəngin “İstisu”nun təravətləndirici və faydalı gücünü hiss edin. Hər damlasında təbiətin mükəmməl harmoniyasını kəşf edin.</p>
            <div className="hot-water-biography-button-box">
              <a className='hot-water-biography-button' href="">Məhsullar</a>
            </div>
          </div>
          <img className='newbottles' src="src/image/newbottles.webp" alt="" />
        </div>
      </nav>
    </section>
  )
}

export default Hero