import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BiMenu } from 'react-icons/bi';
import '../../App.css';
import i18n from '../../i18n';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';

const navlinks = [
  {
    path: '/home',
    display: 'hom',
  },
  {
    path: '/doctors',
    display: 'doctors',
  },
  {
    path: '/services',
    display: 'services',
  },
  {
    path: '/contact',
    display: 'contact',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu');
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('selectedLanguage', lng);
    setIsDropdownOpen(false); // Close the dropdown after language change
  };

  const languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'gu', label: 'ગુજરાતી' },
    { code: 'kangri', label: 'ਕੰਗੜੀ' }, 
  ];

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <img src={logo} alt="Medicare" />
          </div>

          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">

              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'

                    }
                  >
                    {t(link.display)} {/* Use the t function for translations */}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* nav right */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={userImg}
                    className="rounded-full w-full"
                    alt=""
                  />
                </figure>
              </Link>
            </div>

            {/* langugue dropdown code  (bawa writing this comment msg for you <3)*/}

            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  onClick={toggleMenu} // Toggle the dropdown
                  className="inline-flex justify-center w-full rounded-[50px] border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primaryColor"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen} // Set aria-expanded based on the state
                >
                  {languageOptions.find((opt) => opt.code === i18n.language)?.label || 'Select Language'}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.293 10.293a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {isDropdownOpen && ( // Render the dropdown content only when it's open
                <div
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    {languageOptions.map((option) => (
                      <button
                        key={option.code}
                        onClick={() => changeLanguage(option.code)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        tabIndex="-1"
                        id={`options-menu-item-${option.code}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
             {/* end here-- langugue dropdown code  (bawa writing this comment msg for you <3)*/}
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
