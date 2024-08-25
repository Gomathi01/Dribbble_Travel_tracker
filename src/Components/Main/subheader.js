import React, { useState } from "react";
import logo1 from './../../Assets/logo/logo1.png';
import logo6 from './../../Assets/logo/logo6.jpg';
import logo5 from './../../Assets/logo/logo5.png';
import logo4 from './../../Assets/logo/logo4.png';
import mob1 from './../../Assets/logo/mob1.png';
import mob2 from './../../Assets/logo/mob2.png';
import mob3 from './../../Assets/logo/mob3.png';
import mob4 from './../../Assets/logo/mob4.png';
import like from './../../Assets/logo/like.png';
import save from './../../Assets/logo/save.png';


const SubHeader = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (link) => setHoveredLink(link);
    const handleMouseLeave = () => setHoveredLink(null);
    return(
        <>
        <div className="container">
            <h4 className="subHeader">Travel Tracker Website Design</h4>
        </div>
        <div className="container header-content" style={{position: 'sticky', top : 0}}>
                
                <div className="container-main">
                    <div className="container-left p-10">
                        <div
                            className="nav-item1 dropdown"
                            onMouseEnter={() => handleMouseEnter('tubikUx')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="container-icon">
                                <a className="nav-link1 active" href="#">
                                    <img src={logo1} alt="tubik ux" />
                                </a>
                                <div className="container-innerIcon">
                                    <a className="nav-linkInnerIcon active" href="https://dribbble.com/Tubik">
                                        <img src={logo4} alt="tubik ux" />
                                    </a>
                                </div>
                            </div>
                            {/* hoveredLink === 'tubikUx' &&  */}
                            {(
                                <div className="container dropdown-menu p-10">
                                <div className="row menu-item">
                                    <div className="col-md-2">
                                    <img src={logo1} alt="tubik ux" />
                                    </div>
                                    <div  className="col-md-3">
                                    <p className="textP">tubik UX</p>
                                    <p className="textP">Ukraine</p>
                                    </div>
                                    <div  className="col-md-7" style={{textAlign: 'right'}}>
                                    <button className="dropdownPopup">Follow</button>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-between">
                                <div  className="col-md-4">
                                    <img src={mob1} alt="logo1" className="image-item" />
                                </div>
                                <div  className="col-md-4">
                                    <img src={mob2} alt="logo2" className="image-item" />
                                </div>
                                <div  className="col-md-4">
                                    <img src={mob3} alt="logo3" className="image-item" />
                                </div> 
                                </div>
                                <div>
                                    <p>Teams: <img src={logo4} alt="team logo" /> <img src={logo5} alt="team logo" /></p>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                        <div className="nav-container">
                <div className="vertical-nav">
                        {(
                            <div className="container dropdown-menu p-10">
                                <div className="row menu-item">
                                    <div className="col-md-2">
                                        <img src={logo1} alt="tubik ux" />
                                    </div>
                                    <div className="col-md-3">
                                        <p className="textP">tubik UX</p>
                                        <p className="textP">Ukraine</p>
                                    </div>
                                    <div className="col-md-7" style={{ textAlign: 'right' }}>
                                        <button className="dropdownPopup">Follow</button>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-between custom-design">
                                    <div className="col-md-4">
                                        <img src={mob1} alt="logo1" className="image-item" />
                                    </div>
                                    <div className="col-md-4">
                                        <img src={mob2} alt="logo2" className="image-item" />
                                    </div>
                                    <div className="col-md-4">
                                        <img src={mob3} alt="logo3" className="image-item" />
                                    </div>
                                </div>
                                <div>
                                    <p>Teams: <img src={logo4} alt="team logo" /> <img src={logo5} alt="team logo" /></p>
                                </div>
                            </div>

                        )}
                    </div>

                </div>
                <div className="nav-container">
                    <div className="vertical-nav">
                        <div
                            className="nav-item1 dropdown"
                            onMouseEnter={() => handleMouseEnter('tubikUxWork')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="sub-container-detail">
                                <a className="nav-link1 active" href="#" style={{ color: '#000', fontWeight: 600 }}>tubik UX</a> for
                                {hoveredLink === 'tubikUxWork' && (

                                    <div className="container dropdown-menu p-10">
                                        <div className="row menu-item">
                                            <div className="col-md-2">
                                                <img src={logo1} alt="tubik ux" />
                                            </div>
                                            <div className="col-md-3">
                                                <p className="textP">tubik UX</p>
                                                <p className="textP">Ukraine</p>
                                            </div>
                                            <div className="col-md-7" style={{ textAlign: 'right' }}>
                                                <button className="dropdownPopup">Follow</button>
                                            </div>
                                        </div>
                                        <div className="row d-flex justify-content-between custom-design">
                                            <div className="col-md-4 ">
                                                <img src={mob1} alt="logo1" className="image-item" />
                                            </div>
                                            <div className="col-md-4">
                                                <img src={mob2} alt="logo2" className="image-item" />
                                            </div>
                                            <div className="col-md-4">
                                                <img src={mob3} alt="logo3" className="image-item" />
                                            </div>
                                        </div>
                                        <div>
                                            <p>Teams: <img src={logo4} alt="team logo" /> <img src={logo5} alt="team logo" /></p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div
                            className="nav-item1 dropdown flex1"
                            onMouseEnter={() => handleMouseEnter('workOpportunity')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="nav-link5 active" href="#">Available for work</a>
                            {hoveredLink === 'workOpportunity' && (
                                <div className="popup-text">
                                    <a>Send a message about a work opportunity</a>
                                </div>
                            )}

                            <div
                                className="nav-item1 dropdown"
                                onMouseEnter={() => handleMouseEnter('follow')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a className="nav-link1 active" href="#" style={{ right: -60, position: 'absolute' }}>Follow</a>
                                {hoveredLink === 'follow' && (
                                    <div className="dropdown-menu" style={{width:"fit-content"}}>
                                        <p className="popup-align">Follow tubik UX</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="horizontal-nav">
                        <div
                            className="nav-item1 dropdown"
                            onMouseEnter={() => handleMouseEnter('tubik')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="nav-link1 active" href="#" style={{ color: '#000', fontWeight: 600, marginLeft: -50 }}>tubik</a>
                            {hoveredLink === 'tubik' && (
                                <div className="container dropdown-menu p-10">
                                    <div className="row menu-item">
                                        <div className="col-md-2">
                                            <img src={logo6} alt="tubik ux" style={{ borderRadius: "50%", width: "50px" }} />
                                        </div>
                                        <div className="col-md-3">
                                            <p className="textP">tubik UX</p>
                                            <p className="textP">Ukraine</p>
                                        </div>
                                        <div className="col-md-7" style={{ textAlign: 'right' }}>
                                            <button className="dropdownPopup">Follow</button>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-between custom-design">
                                        <div className="col-md-4 ">
                                            <img src={mob1} alt="logo1" className="image-item" />
                                        </div>
                                        <div className="col-md-4">
                                            <img src={mob3} alt="logo2" className="image-item" />
                                        </div>
                                        <div className="col-md-4">
                                            <img src={mob4} alt="logo3" className="image-item" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                    </div>
                </div>


                <div className="container-right">
                    <div className="icon">
                        <div className="nav-item2 dropdown"
                            onMouseEnter={() => handleMouseEnter('like')}
                            onMouseLeave={handleMouseLeave}>
                            <a className="nav-link2 active" href="#">
                                <button className="btn3">
                                    <img src={like} alt="like" />
                                </button>
                            </a>
                            {hoveredLink === 'like' && (
                                <div className="dropdown-menu">
                                    <p className="popup-align">Like this shot</p>
                                </div>
                            )}
                        </div>
                        <div className="nav-item2 dropdown"
                            onMouseEnter={() => handleMouseEnter('save')}
                            onMouseLeave={handleMouseLeave}>
                            <a className="nav-link2 active" href="#">
                                <button className="btn4">
                                    <img src={save} alt="save" />
                                </button>
                            </a>
                            {hoveredLink === 'save' && (
                                <div className="dropdown-menu">
                                    <p className="popup-align">Save shot</p>
                                </div>
                            )}
                        </div>
                        <div className="nav-item2 dropdown"
                            onMouseEnter={() => handleMouseEnter('getInTouch')}
                            onMouseLeave={handleMouseLeave}>
                            <a className="nav-link2 active" href="#">
                                <button className="btn5">Get in touch</button>
                            </a>
                            {hoveredLink === 'getInTouch' && (
                                <div className="dropdown-menu">
                                    <p className="popup-align">Get in touch</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>

        </>
    )
}

export default SubHeader;