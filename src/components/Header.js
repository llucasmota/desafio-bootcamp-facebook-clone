import React from 'react';
import profile from '../assets/svg-user.svg';

function Header() {
  return (
    <header className="row">
      <div className="col-6">
        <figure className="figure-logo">
          <img
            src="https://i.imgur.com/KDIDiSE.png"
            alt="facebook logo"
            id="logo"
          />
        </figure>
      </div>
      <div className="col-6">
        <figure className="figure-logo">
          <img className="svg-udacity" id="header-section logo" src={profile} />
        </figure>
      </div>
    </header>
  );
}

export default Header;
