import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants'
import './Footer.css'

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">
            Obere Kanalstrase, 10 90429, Nuremberg, Germany
          </p>
          <p className="p__opensans">+4915217869619</p>
          <p className="p__opensans">+923002229880</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">
            The best way to find yourself is to lose yourself in the service of
            others.{' '}
          </p>
          <img
            src={images.spoon}
            alt="footer_spoon"
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday - Friday:</p>
          <p className="p__opensans">08:00 AM - 09:00 PM</p>
          <p className="p__opensans">Saturday - Sunday:</p>
          <p className="p__opensans">10:00 AM - 12:00 AM</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans"> 2023, Decoder. All Rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
