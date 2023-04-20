import React from 'react';
import './App.css';

function Header() {

  const handleTopRightButtonClick = () => {
    console.log('Top right button clicked!');
    // Add your custom logic here
  };

  const handleBottomLeftButtonClick = () => {
    console.log('Bottom left button clicked!');
    // Add your custom logic here
  };

  return (
    <div className="header">
      <img src="/path/to/logo.png"className="logo" />
      <img src="D:\vs code files\food app\food-app\src\components\Rectangle 400.png" className="left-image" />
      <img src='D:\vs code files\food app\food-app\src\components\Vector 1.png'className="vector" />
      <div className='para'>
        <h1>Discover the <spam className="best">Best</spam> Food and Drinks</h1>
      </div>
      <p className='ps1'>Naturally made Healthcare Products for the better care & support of your body.</p>
      <button className="button top-right-button" onClick={handleTopRightButtonClick}>
        <spam className='bt1'>GET TOUCHS</spam>
      </button>
      <div className="bottom-left-container">
        <button className="button bottom-left-button" onClick={handleBottomLeftButtonClick}>
          <spam className='bt2'>EXPLORE NOW!</spam>
        </button>
      </div>
    </div>
  );
}

export default Header;

