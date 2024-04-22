import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white fixed-top d-flex justify-content-between align-items-center px-3 py-2">
      <div>
        <h1 className="mb-0">Praxis+</h1>
      </div>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;