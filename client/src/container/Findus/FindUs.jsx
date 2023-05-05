import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Obere KanalrStrase 10, 90429, Nuremberg, Germany
          </p>
          <p
            className="p__cormorant"
            style={{ color: '#dcca87', margin: '2rem 0' }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri 10:00 AM - 6:00 PM</p>
          <p className="p__opensans">Sat - Sun 12:00 PM - 11:00 PM</p>
        </div>
        <button className="custom__button" style={{ marginTop: '2rem' }}>
          Visit Us
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="find us" />
      </div>
    </div>
  )
}

export default FindUs
