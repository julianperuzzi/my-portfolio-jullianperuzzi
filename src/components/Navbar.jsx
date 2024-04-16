import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/dev.JUlian.png';
import burgerMenu from '../assets/134216_menu_lines_hamburger_icon (3).svg';
import closeBtn from '../assets/211651_close_round_icon (1).svg';

const Navbar = ({ handleLinkClick, menuClicked, setMenuClicked }) => {
  const handleClick = () => {
    setMenuClicked(prevState => !prevState);
  };

  return (
    <>
      <div className={`${menuClicked ? 'hidden' : 'fixed inset-0 bg-black bg-opacity-20 backdrop-blur-md'} top-0 left-0 w-1/2 h-full z-10 `} onClick={handleClick}></div>

      <ul className={`${menuClicked ? 'hidden' : ''} fixed bg-NavPurple backdrop-filter backdrop-blur-md top-0 right-0 w-1/2 p-[24px] h-full text-[18px] lg:flex lg:items-center lg:place-content-around lg:p-0 lg:h-auto lg:relative lg:text-[16px] z-20 text-white `}>
        <li className={`${menuClicked ? 'hidden' : ''} cursor-pointer lg:hidden  flex place-content-end`}>
          <img className='w-8 h-8 mb-[87px]' src={closeBtn} onClick={handleClick} alt="" />
        </li>
        <li className='mb-8 lg:mb-0'>
          <Link className='hover:font-bold' to="/about" onClick={() => { handleLinkClick(); setMenuClicked(true); }}>ABOUT</Link>
        </li>
        <li className='mb-8 lg:mb-0'>
          <Link className='hover:font-bold text-purple-400' to="/contact" onClick={() => { handleLinkClick(); setMenuClicked(true); }}>CONTACT</Link>
        </li>
        <li className='mb-8 lg:mb-0'>
          <Link className='hover:font-bold' to="/repository" onClick={() => { handleLinkClick(); setMenuClicked(true); }}>REPOSITORY</Link>
        </li>
        <li className='mb-8 lg:mb-0'>
          <Link className='hover:font-bold' to="/experience" onClick={() => { handleLinkClick(); setMenuClicked(true); }}>EXPERIENCE</Link>
        </li>
        <img className={`lg:w-[90px] md:hidden`} src={logo} alt="logo" />
      </ul>
      <img className={`${menuClicked ? '' : 'hidden'}  cursor-pointer lg:hidden pr-4 h-6  `} src={burgerMenu} onClick={handleClick} alt="" />
    </>
  );
};

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(true);

  const handleLinkClick = () => {
    setMenuClicked(false);
  };

  return (
    <header className={`flex place-content-between items-center sticky top-0 z-30 bg-NavPurple `}>
      
      <Link to="/">
        <img className={`md:w-[170px] md:ml-32 w-[110px] ml-8 `} src={logo} alt="logo" />
      </Link>
      <Navbar handleLinkClick={handleLinkClick} menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
    </header>
  );
};

export default Header;
