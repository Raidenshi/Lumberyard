import React from 'react';
import Blog from '../components/Blog';
import tools from '../images/Tools.jpg';
import '../styles/main.scss';

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <img className="main__representation" src={tools} alt="" />
        <Blog />
      </div>
    </main>
  );
}

export default Main;
