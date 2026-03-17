import React from 'react'

const ProductsIntro = () => {
  return (
    <section>
        <div className="product-intro-box">
            <h2 className='product-intro-heading'>Məhsullarımız</h2>
            <p className='product-intro-content'>“İstisu” təbii mineral suyu - evdə, işdə, yolda, yaxud idmanla məşğul olduğunuz zaman ideal seçimdir. Özünüz üçün “İstisu”nu kəşf edin və Kəlbəcərin təbii termal mənbəyindən çıxan suyun saflığını və enerjisini hiss edin.</p>
            <div className="product-intro-button-box">
                <a className='product-intro-button' href="">Daha ətraflı</a>
            </div>
            <div className="product-intro-image-box">
                <img className='product-intro-image' src="src/image/packshot.webp" alt="" />
            </div>
        </div>
    </section>
  )
}

export default ProductsIntro