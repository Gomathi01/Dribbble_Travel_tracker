import React from "react";
import { useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import video1 from './../../Assets/video1.mp4';
import video2 from './../../Assets/video2.mp4';

const Section1 = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isSoundIconHovered, setIsSoundIconHovered] = useState(false);
    const [isVideoHovered, setIsVideoHovered] = useState(false);
    const toggleMute = () => {
        setIsMuted(!isMuted);
    };
    return (
        <div className="container">
            <div className="video-container ">
                <video width="1130" loop autoPlay muted style={{ borderRadius: '10px', overflow: 'hidden' }}>
                    <source src={video1} type="video/mp4" />

                </video>
            </div>
            <div className="description-container">
                <p>
                    Let's check one of our recent projects with the vibes of traveling and tourism.In it,
                    we designed the website strengthening digital marketing and online presence for
                    Flamingo,the overseas and stateside travel tracker application.Take a glance at
                    some website interactions, and stay tuned to see more!
                </p>
                <strong>If you want to collaborate, contact us via<a href="#" className="list-container">hire@tubikstudio.com</a> </strong>
                <p>Also, welcome to check:</p>

                <ul className="list-container">
                    <li>the massive and growing collection of tubik design case studies </li>
                </ul>
                <ul className="list-container">
                    <li> the diverse collection of practical design articles in tubik blog</li>
                </ul>
                <ul className="list-container">
                    <li>the overview of the anatomy of a web page</li>
                </ul>
                <ul className="list-container">
                    <li>the essential features of business website design</li>
                </ul>
                <ul className="list-container">
                    <li> the tips on how to apply web animation</li>
                </ul>
            </div>

            <div className="video-container2"
                onMouseEnter={() => setIsVideoHovered(true)}
                onMouseLeave={() => {
                    setIsVideoHovered(false);
                    setIsSoundIconHovered(false);
                }}>
                <video width="800" loop autoPlay muted={isMuted} style={{ borderRadius: '10px', overflow: 'hidden'}}>
                    <source src={video2} type="video/mp4" />
                </video>
                {isVideoHovered && (
                    <div
                        className="sound-icon"style={{marginLeft:"250px"}}
                        onMouseEnter={() => setIsSoundIconHovered(true)}
                        onMouseLeave={() => setIsSoundIconHovered(false)}
                        onClick={toggleMute}
                    >
                        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                        {isSoundIconHovered && (
                            <div className="sound-message">
                                {isMuted ? "Turn audio On" : "Turn audio Off"}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="container3" style={{marginTop:"60px", textAlign: 'center'}}>
            <a href="#" className="link">hire@tubikstudio.com</a>
            <p className="content">tubikstudio.com</p>
            </div>
        </div>
    )
}
export default Section1;
