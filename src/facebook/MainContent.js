import React from 'react';
import { postData, storyAndPostData } from './data';
import Footer from './Footer';
import AllPosts from './AllPosts';

function MainContent() {
  return (
    <div className="main-content">
      <div id="story-gallery" className="story-gallery">
        {storyAndPostData.map((item, index) => (
          item.type === 'story' && (
            <div key={index} className={`story story${index + 1}`}>
              <img src={require(`./images/${item.image}`)} alt={item.text} />
              <p>{item.text}</p>
            </div>
          )
        ))}
      </div>

          <AllPosts postData={postData}/>
          <Footer/>
    </div>
  );
}

export default MainContent;
