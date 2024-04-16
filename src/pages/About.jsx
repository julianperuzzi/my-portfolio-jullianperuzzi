import React from 'react';
import NameComponent from '../components/NameComponent';
import aboutImage from '../assets/Diseño sin título (4).png'; // Importa la imagen

const About = () => {
  return (
    <div className="bg-PurpleDark text-white p-8 flex items-center h-screen md:px-32">
      <div className="flex flex-col md:flex-row mx-auto">
        <div className="w-full md:w-2/3 mr-8 text-center md:text-left md:mt-10">
          <h1 className="font-bold text-4xl mb-8 box-decoration-slice bg-gradient-to-r from-PurpleDark to-purple-600 p-2 md:mt-20"><NameComponent /></h1>
          <p className="mb-6 text-lg md:mt-20">At Our Company, we strive for excellence in everything we do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sem vitae mauris fringilla tristique. Quisque ac diam sed quam varius consequat. Nulla facilisi.</p>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 mx-auto md:mx-0 flex items-center floating-animation">
          <img src={aboutImage} alt="About Us" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
