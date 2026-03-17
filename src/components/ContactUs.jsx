import React from 'react'

const ContactUs = () => {
    return (
        <section>
            <h1 className='contact-us-heading'>Bizimlə əlaqə saxlayın.</h1>
            <form action="">
                <div className='form'>
                    <label htmlFor="">Ad, soyad:</label>
                    <input type="text" />
                    <label htmlFor="">Elektron poçt ünvanı:</label>
                    <input type="text" />
                    <label htmlFor="">Telefon nömrəsi:</label>
                    <input type="text" />
                    <label htmlFor="">Müraciət:</label>
                    <input type="text" />
                    <button>Göndərin</button>
                </div>
            </form>
            <p className='contact-us-content'>Bizi sosial media hesablarımızdan izləyin.</p>
            <div className="contact-us-icon-boxes1">
                <div className='contact-us-icon-box'>
                    <i class="fa-brands fa-facebook-f contact-icon"></i>
                </div>
                <div className='contact-us-icon-box'>
                    <i class="fa-brands fa-instagram contact-icon"></i>
                </div>
                <div className='contact-us-icon-box'>
                    <i class="fa-brands fa-linkedin contact-icon"></i>
                </div>
                <div className='contact-us-icon-box'>
                    <i class="fa-brands fa-youtube contact-icon"></i>
                </div>
            </div>
            <div className="contact-icon-boxes2">
                <div className="contact-icon-boxes3">
                    <div className="contact-icon-box">
                        <i class="fa-solid fa-location-dot location"></i>
                        <span>Ünvan:</span>
                        <div className='line'></div>
                    </div>
                    <p className='contact-icon-content1'>Azərbaycan, Kəlbəcər rayonu, İstisu qəsəbəsi</p>
                </div>
                <div className="contact-icon-boxes4">
                    <div className="contact-icon-box">
                        <i class="fa-solid fa-location-dot location"></i>
                        <span>Əlaqə:</span>
                        <div className='line'></div>
                    </div>
                    <div className="contact-icon-content-box1">
                        <p className='contact-icon-content2'>Elektron poçt</p>
                        <p className='contact-icon-content3'>Telefon</p>
                    </div>
                    <div className="contact-icon-content-box2">
                        <p className='contact-icon-content4'>info@istisu.com</p>
                        <p className='contact-icon-content5'>*0032</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs