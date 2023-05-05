import React from 'react';
import "./Facebook.css"
import Navbar from './NavBar';
import LeftSidebar from './LeftSideBar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';

function Facebook() {
    return (
        <div className="facebook">
                <Navbar/>
            <div className='container'>
                <LeftSidebar/>
                <MainContent/>
                <RightSidebar/>
            </div>
        </div>

    );
}

export default Facebook;