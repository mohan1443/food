import React from 'react';
import './App.css'; // Import the CSS file for this component

function CardScrollView() {
  return (
    <div className="card-scroll-view">
      <h1 className="articles">Latest Articles</h1>
          <div className="scroll-view-content">
        <div className="scroll-view-page">
          <div className="card">
            <img src='D:\vs code files\food app\food-app\src\components\tamto.png' className='images'/>
            <h1>Grilled Tomatoes at Home</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... </p>
            <button className="button">Read More</button>
          </div>
          <div className="card">
            <img src='D:\vs code files\food app\food-app\src\components\meal1.png' className='images2'/>
            <h1>Snacks for Travel</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... </p>
            <button className="button">Read More</button>
          </div>
          <div className="card">
          <img src='D:\vs code files\food app\food-app\src\components\meal2.png' className='images3'/>
            <h1>Post-workout Recipes</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... </p>
            <button className="button">Read More</button>
          </div>
        </div>

        <div className="scroll-view-page2">
          <div className="card">
          <img src='D:\vs code files\food app\food-app\src\components\meal2.png' className='images'/>
            <h1>How To Grill Corn</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... </p>
            <button className="button">Read More</button>
          </div>
          <div className="card">
          <img src='D:\vs code files\food app\food-app\src\components\meal2.png' className='images2'/>
            <h1>Crunchwrap Supreme</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... </p>
            <button className="button">Read More</button>
          </div>
          <div className="card">
          <img src='D:\vs code files\food app\food-app\src\components\meal2.png' className='images3'/>
            <h1>Broccoli Cheese Soup</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... </p>
            <button className="button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardScrollView;
