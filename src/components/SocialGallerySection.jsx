import React from 'react'

const SocialGallerySection = () => {
  return (
    <section>
        <div className="sosical-galery-boxes">
            <h2 className='sosical-galery-heading'>Bizi izləyin</h2>
            <p className='sosical-galery-content'>Ən son xəbərlərdən məlumatlı olmaq üçün bizi sosial media hesablarımızdan izləyin.</p>
            <div className="sosical-galery-box1">
                <img src="src/image/1067.webp" alt="" />
                <img src="src/image/1073.jpeg" alt="" />
                <img src="src/image/1076.webp" alt="" />
            </div>
            <div className="sosical-galery-box2">
                <img src="src/image/1079.webp" alt="" />
                <img src="src/image/1082.jpeg" alt="" />
                <img src="src/image/1085.jpeg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default SocialGallerySection