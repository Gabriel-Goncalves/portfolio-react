import React from 'react';
import NotFoundImg from '../svgs/NotFoundSvg.svg';
import home from '../svgs/home.svg';
import {Link} from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Link to="/" className="home-link">
        <img src={home} alt="back to home"/>
      </Link>
      <h1>Page Not Found</h1>
      <img src={NotFoundImg} alt="page not found" className="not-found-img" />
    </div>
  );
};

export default NotFound;
