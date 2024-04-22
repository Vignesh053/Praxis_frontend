import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white fixed-bottom">
      <div className="container-fluid text-center py-2">
        <p className="mb-0">&copy; {new Date().getFullYear()} Origami</p>
      </div>
    </footer>
  );
};

export default Footer;