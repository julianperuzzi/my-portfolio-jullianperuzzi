import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">Julian Peruzzi</p>
          <p className="text-sm">Desarrollador de Software</p>
        </div>
        <div className="flex items-center">
          <a href="https://github.com/tu-usuario-de-github" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mr-4">
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
          </a>
          <a href="https://linkedin.com/in/tu-usuario-de-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
