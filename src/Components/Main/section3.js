import React, {useState} from 'react';
import img1 from './../../Assets/image/img1.jpg';
import img2 from './../../Assets/image/img2.jpg';
import img3 from './../../Assets/image/img3.jpg';
import img4 from './../../Assets/image/img4.jpg';

const Section3 = () => {
    const dataArray = [img1, img2, img3, img4];
    const [content,setContent] =useState(null);
  
    const dataContent = ['Travel Tracker Service Website', 'Travel Tracker Mobile Website', 'Active Rest App Landing Page', 'Travel Tracker Website Hero Section']
    const [show, setShow] = useState(true)

    const onMouseHover = (index) => {
      setShow(false);
      setContent(index);
    };
    const onMouseLeave = () => setShow(true);
    return (
        <div className="container">
            <div className="row">
                <div className='col-md-6 customsection3Title'>
                    <h4>More by tubik</h4>
                </div>
                <div className='col-md-6 customsection3Title1'>
                    <p>Show Profile</p>
                </div>
            </div>
            
            <div className="row section3-imgStyle">
              {dataArray.map((item, index) => (
                <div
                  key={index}
                  className="col-md-3 image-wrapper"
                  onMouseEnter={() => onMouseHover(index)}
                  onMouseLeave={onMouseLeave}
                >
                  <div className={`overlay ${show ? 'visible' : ''}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      role="img"
                      className="icon1 fill-current"
                    >
                      <path
                        d="M6.40436 0.522824C6.936 0.0682789 7.79709 0.0682789 8.32873 0.522824C8.59491 0.749733 8.72873 1.04792 8.72727 1.34537V3.12355C12.9542 3.45373 16 6.65955 16 11.6363C16 11.6363 13.5076 9.16719 8.72727 8.93228V10.6545C8.72873 10.9526 8.59491 11.2501 8.32873 11.477C8.06327 11.7039 7.71491 11.8181 7.36654 11.8181C7.01818 11.8181 6.67054 11.7046 6.40436 11.477L-4.76837e-07 5.99992L6.40436 0.522824Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <img
                    className="image-style"
                    src={item}
                    alt={`item-${index}`}
                  />
                  {index==content && <div className={` overlay1 ${!show ? 'visible' : ''}`}>
                    
                <div className="row overlay-content">
                  <div className="col-md-6 overlay-title">
                    <p className="titleStyle">{dataContent[index]}</p> 
                  </div>
                  <div className="col-md-6  overlay-actions">
                    <button className="wishlist-btn">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="like-btn">
                      <i className="fas fa-thumbs-up"></i>
                    </button>
                  </div>
                </div>
              </div>}
                  
                </div>
              ))}
            </div>
          <div className="container LF-btn">
            <div className='col-md-12 text-center'>
            <button className="L-btn">L</button>
            <button className="F-btn">F</button>  
            <span style={{ marginLeft: '10px' }}>like</span>
            </div>
          </div>
        </div>
      );
}
export default Section3;