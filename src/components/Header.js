import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui huge borderless menu">
      <div className="ui container">
        <Link to="/" className="header horizontally fitted item">
          HealthTracker
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            Logs
          </Link>
          <Link to="/visualize" className="item">
            Visualize
          </Link>
          <Link to="/create" className="item">
            Add
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
