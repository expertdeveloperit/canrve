import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
    render() {
        return (
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="/">
                <img src="./images/canrve.png" alt="Canrve" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav offset-lg-2">
                <li className="nav-item active">
                  <a className="nav-link font-weight-bold" href="/">Hotels <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link font-weight-bold" href="/">Home Stays<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link font-weight-bold" href="/">Dispenseries<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link font-weight-bold" href="/">Experiences<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link font-weight-bold" href="/login">Log In<span className="sr-only">(current)</span></a>
                </li>
              </ul>
              </div>
            </nav>
          </header>
        );
    }
}
export default Header;