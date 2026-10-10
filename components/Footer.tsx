import React from 'react';

const Footer: React.FC<{ inert?: boolean }> = ({ inert }) => (
  <footer className="wrap site-foot" inert={inert}>
    <span>Akshay Mondal, {new Date().getFullYear()}</span>
    <span>
      Built with React, WebGL and view transitions.{' '}
      <a href="https://github.com/h3x-levi/portfolio" target="_blank" rel="noopener noreferrer">Source on GitHub</a>
    </span>
  </footer>
);

export default Footer;
