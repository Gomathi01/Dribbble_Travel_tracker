import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Logo from '../../Assets/logo/logo';
const Header = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (link) => setHoveredLink(link);
    const handleMouseLeave = () => setHoveredLink(null);

    return (
        <>
            {}

        <Navbar bg="white" expand="xxl" className="w-100 customNav">
            <div className='container-fluid'>
                <Navbar.Collapse id="basic-navbar-nav">
                {/* Menu on the left */}
                <Nav className="mr-auto uiLink">
                    <Nav.Link href="#home" className='uiLink'>
                    <li className="nav-item dropdown"
                onMouseEnter={() => handleMouseEnter('findDesigners')}
                onMouseLeave={handleMouseLeave}>
                <a className="nav-link" href="#">Find designers</a>
                {hoveredLink === 'findDesigners' && (
                    <div className="dropdown-menu" style={{
                        width: "fit-content",
                        padding: "10px",
                        borderRadius: "8px",
                        boxShadow: "0 1px 2px rgba(0,0,0,0)",
                        backgroundColor: "transparent",
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        zIndex: 1000
                    }}>
                        <h6 style={{ margin: "0 0 5px", fontSize: "13px", fontWeight: "bold", color:"#72736e" }}>Designer Search</h6>
                        <p style={{ margin: "0 0 10px", fontSize: "small", color:"#72736e", whiteSpace: "nowrap" }}>Quickly find your next designer</p>
                        <h6 style={{ margin: "0 0 5px", fontSize: "13px", fontWeight: "bold" , color:"#72736e"}}>Post a job</h6>
                        <p style={{ margin: "0", fontSize: "small" , color:"#72736e", whiteSpace: "nowrap"}}>The #1 job board for design talent</p>
                    </div>
                )}
            </li></Nav.Link>
                    <Nav.Link href="#features" className='uiLink'>
                        <a className="nav-link">Inspiration</a></Nav.Link>
                    <Nav.Link href="#pricing" className='uiLink'><a className="nav-link">Jobs</a></Nav.Link>
                    <Nav.Link href="#pricing" className='uiLink'><a className="nav-link">Go Pro</a></Nav.Link>
                </Nav>
                
                {/* Center logo */}
                <Navbar.Brand className="mx-auto" href="#home">
                <a className="nav-link">
                    <Logo />
                    </a>
                </Navbar.Brand>
                
                {/* Login/Logout on the right */}
                <Nav className="ml-auto">
                    <input className="searchbtn" type="text" placeholder="Search..." />
                    <Nav className="ml-auto">
                        <button className="custom-login-button mr-2">Login</button>
                        <button className="custom-logout-button">Signup</button>
                    </Nav>
                </Nav>
                </Navbar.Collapse>
            </div>
            </Navbar>
           
            
            </>
    );
};

export default Header;
