import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.css';

const Navigation = () => {
  return (
    <>
      <div className="header">
        <nav className="nav-container">
          <div className="nav-logo-container">
            <Link to="/">
              <span className="logo-text">ReArt</span>
            </Link>
          </div>
          <div className="nav-links-container">
            <ul className="nav-links-list">
              <li>
                <Link to="/browse">Browse</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
