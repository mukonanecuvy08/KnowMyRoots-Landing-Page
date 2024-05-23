import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            KnowMyRoots
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            
           
           
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li className="nav-item">
      <a href="/signin" className="nav-link"> {/* Use href to navigate to the SignIn page */}
        SignIn
      </a>
    </li>
    <li className="nav-item">
      <a href="signup.js" className="nav-link"> {/* Use href to navigate to the Signup page */}
        Signup
      </a>
    </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};
