import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const Header = ({ className, ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: "HOME", href: "/", isActive: true },
    { text: "ABOUT US", href: "/about" },
    { text: "EVENT", href: "/events" },
    { text: "GALLERY", href: "/gallery" },
    { text: "TEAM", href: "/team" },
    { text: "INITIATIVE", href: "/initiatives" },
    { text: "BLOGS", href: "/blogs" }
  ];

  return (
    <header 
      className={twMerge(
        "w-full bg-background-dark px-4 sm:px-6 lg:px-[22px] py-[16px] overflow-y-auto",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex justify-between items-start mb-[10px]">
          {/* Logo Section */}
          <div className="flex gap-[10px] justify-center items-end w-auto mt-[18px]">
            <a href="/" className="block">
              <img 
                src="/images/img_frame_2.svg" 
                alt="E-CELL DMCE Logo"
                className="w-[36px] h-[30px]"
              />
            </a>
            <span 
              className="text-xs font-normal leading-xs tracking-[15px] text-right text-text-light"
              style={{ fontFamily: 'Homenaje' }}
            >
              DMCE
            </span>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-4 text-text-light" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-[54px] justify-center items-center self-end mr-[4px] mb-[10px]">
            {menuItems?.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                className={twMerge(
                  "text-md font-bold leading-md text-left transition-colors duration-200 hover:text-text-accent",
                  item?.isActive ? "text-text-accent" : "text-text-light"
                )}
                style={{ fontFamily: 'Oxygen' }}
                role="menuitem"
              >
                {item?.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden mt-4 pb-4`}>
          <div className="flex flex-col gap-4">
            {menuItems?.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                className={twMerge(
                  "text-md font-bold leading-md text-left transition-colors duration-200 hover:text-text-accent px-4 py-2",
                  item?.isActive ? "text-text-accent" : "text-text-light"
                )}
                style={{ fontFamily: 'Oxygen' }}
                role="menuitem"
                onClick={() => setMenuOpen(false)}
              >
                {item?.text}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;