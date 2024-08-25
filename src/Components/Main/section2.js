import React,{useState} from "react";
import logo6 from './../../Assets/logo/logo6.jpg';

const Section2 = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (link) => setHoveredLink(link);
    const handleMouseLeave = () => setHoveredLink(null);
    return (
        <div className="fullBlock">
            <div className="section2image-container logo6-container text-center">
                <div className="line"></div>
                <img className="centered-image" src={logo6}></img>
                <div className="line"></div>
            </div>
            <div className="headline">
                <p>tubik</p>
            </div>
            <div className="txt">
                <p>Yes, we’re available. Contacts in “About”</p>
            </div>
                <div className="nav-item3 dropdown" style={{textAlign: 'center'}}
                    onMouseEnter={() => handleMouseEnter('getInTouch')}
                    onMouseLeave={handleMouseLeave}>
                    <a className="nav-link2 active" href="#">
                        <button className="btn6"style={{textAlign: 'center',marginTop:"10px"}}>Get in touch</button>
                    </a>
                    {hoveredLink === 'getInTouch' && (
                        <div className="dropdown-menu">
                            <p className="popup-align">Get in touch</p>
                        </div>
                    )}
                </div>
        </div>
    )
}
export default Section2;