import React from 'react';
import './App.css';

const About = () => {
  return (
    <div className='about-space'>
        <img src="D:\vs code files\food app\food-app\src\components\About.png"alt='menu'  className="about-image" />
      <div className="text-container">
        <h2 className='about-tst'>About Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries.
        </p>
        <button className='btn3'><span className='read'>ReadMore</span></button>
        </div>
      </div>
  );
};

export default About;
