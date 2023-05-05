import React from 'react';
import "./Linkedin.css"
import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';

function Linkedin(props) {
    return (
        <div className='linkedin'>
            <Navbar/>
            <div className="container">
                <LeftSidebar/>
                <MainContent/>
                <RightSidebar/>
            </div>
        </div>
    );
}

export default Linkedin