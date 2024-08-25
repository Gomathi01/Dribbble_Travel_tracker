import React, { useState } from 'react';
import Logo from './../../Assets/logo/logo.js'
const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
};

const handleMouseLeave = () => {
    setHoveredLink(null);
};

  return (
    <>
      <div className="container footer">
        <div className="row row-style">
          <div className="col-md-2">
            <div className="footer-logo"
            onMouseEnter={() => handleMouseEnter('dribbble')}
            onMouseLeave={handleMouseLeave}>
             <Logo />
              {hoveredLink === 'dribbble' && (
                <div className="dropdown-item" style={{ position: 'absolute', top: '100%',cursor:"pointer"}}>
                  <p>Dribbble: the community of graphic design</p>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-7">
            <div className="footer-links">
              <a className="footer-link" href="#">For designers</a>
              <a className="footer-link" href="#">Hire talent</a>
              <a className="footer-link" href="#">Inspiration</a>
              <a className="footer-link" href="#">Advertising</a>
              <a className="footer-link" href="#">Blog</a>
              <a className="footer-link" href="#">About</a>
              <a className="footer-link" href="#">Careers</a>
              <a className="footer-link" href="#">Support</a>
            </div>
          </div>

          <div className="col-md-3">
            <div className="footer-social-links text-center">
              <a className="social-link" href="#"><i className="fab fa-twitter"></i></a>
              <a className="social-link" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="social-link" href="#"><i className="fab fa-instagram"></i></a>
              <a className="social-link" href="#"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-10">
        <div className="row row-style">

          <div className="col-md-6 d-flex justify-content-start">
            <div className="footer-left text-center text-md-start">
              <a className="footer-link1">&copy; 2024 Dribbble</a>
              <a className="footer-link1" href="#">Terms</a>
              <a className="footer-link1" href="#">Privacy</a>
              <a className="footer-link1" href="#">Cookies</a>
            </div>
          </div>


          <div className="col-md-6 d-flex justify-content-end">
            <div className="footer-right text-center text-md-start">
              <a className="footer-link1" href="#">Jobs</a>
              <a className="footer-link1" href="#">Designers</a>
              <a className="footer-link1" href="#">Freelancers</a>
              <a className="footer-link1" href="#">Tags</a>
              <a className="footer-link1" href="#">Places</a>
              <a className="footer-link1" href="#">Resources</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Footer;