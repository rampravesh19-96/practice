import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import AllPosts from './AllPosts';
import {postData} from "../facebook/data"
import Footer from './Footer';

function Profile(props) {
    return (
        <>
            <NavBar/>
            <div class="profile-container">
                <img src={require("./images/cover.png")} class="cover-img"/>
                <div class="profil-details">
                    <div class="pd-left">
                        <div class="pd-row">
                            <img src={require("./images/profile.png")} class="pd-image"/>
                            <div>
                                <h3>Jack Nicholson</h3>
                                <p>120 Friends</p>
                                <img src={require("./images/member-1.png")}/>
                                <img src={require("./images/member-2.png")}/>
                                <img src={require("./images/member-3.png")}/>
                                <img src={require("./images/member-4.png")}/>
                                <img src={require("./images/member-5.png")}/>
                            </div>
                        </div>
                    </div>
                    <div class="pd-right">
                        <button type="button"><img src={require("./images/add-friends.png")}/> Friends</button>
                        <button type="button"><img src={require("./images/message.png")}/> Message</button>
                        <br/>
                        <Link to=""><img src={require("./images/more.png")}/></Link>
                    </div>
                </div>


                <div class="profile-info">
                    <div class="info-col">
                        <div class="profile-intro">
                            <h3>Intro</h3>
                            <p class="intro-text">Believe in yourself and you can do unbelievable things.
                                <img src={require("./images/feeling.png")}/>
                            </p>
                            <hr/>
                            <ul>
                                <li><img src={require("./images/profile-job.png")}/> Director at 99media Ltd</li>
                                <li><img src={require("./images/profile-study.png")}/>  Studied at Amity university.</li>
                                <li><img src={require("./images/profile-study.png")}/>  Went to DPS Delhi</li>
                                <li><img src={require("./images/profile-home.png")}/>  Lives in banglore, India</li>
                                <li><img src={require("./images/profile-location.png")}/>  From Banglore</li>
                            </ul>
                        </div>
                        <div class="profile-intro">
                            <div class="title-box">
                                <h3>Photos</h3>
                                <Link to="All Photos">All Friends</Link>
                            </div>
                            <p>120 (10 mutual)</p>

                            <div class="photo-box">
                                <div><img src={require("./images/member-2.png")}/><p>Nathan N</p></div>
                                <div><img src={require("./images/member-1.png")}/><p>Joseph N</p></div>
                                <div><img src={require("./images/member-3.png")}/><p>George D</p></div>
                                <div><img src={require("./images/member-4.png")}/><p>Francis L</p></div>
                                <div><img src={require("./images/member-5.png")}/><p>Anthony E</p></div>
                                <div><img src={require("./images/member-6.png")}/><p>Michel A</p></div>
                                <div><img src={require("./images/member-7.png")}/><p>Edward M</p></div>
                                <div><img src={require("./images/member-8.png")}/><p>Brandon C</p></div>
                                <div><img src={require("./images/member-9.png")}/><p>James Doe</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="post-col">
                    <AllPosts postData={postData}/>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}

export default Profile;