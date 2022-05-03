import React from 'react';
import Button from './Button';

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <a href="https://reactjs.org/" target="_blank">
          <Button icon="heart" icon2="far fa-heart" />
        </a>
        <a href="https://www.w3schools.com/react/react_props.asp"
          target="_blank">
          <Button icon="heart-broken" icon2="fas fa-heart-broken" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
