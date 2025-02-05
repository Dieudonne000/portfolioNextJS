'use client';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Toggler from './toggler';
import { RiMenu2Line } from 'react-icons/ri';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home'); // Match correct section name
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const sections = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'aboutme' },
    { name: 'Project', id: 'project' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 80; // Offset for fixed navbar
        for (const { name, id } of sections) {
          const section = document.getElementById(id);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setActiveLink(name);
              break; // Exit loop early when match is found
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-[3rem] navbar backdrop-blur-sm z-10 bg-[#083344]/70 rounded-full px-1 w-fit mx-auto mt-2 fixed top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-between min-w-[20rem]">
      <ul className="flex px-1 gap-1 md:flex">
        {sections.map(({ name, id }) => (
          <li key={id}>
            <ScrollLink
              to={id}
              smooth={true}
              duration={500}
              offset={-70}
              className={`${
                activeLink === name ? '' : ''
              } text-white font-semibold hover:text-[#23a6c7] text-sm cursor-pointer rounded-full px-4 py-2 transition-colors duration-700`}
              onClick={() => setActiveLink(name)}
              aria-current={activeLink === name ? 'page' : undefined}
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Hamburger menu icon for mobile */}
      <div className="md:hidden flex flex-row items-center px-5">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <RiMenu2Line /> 
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-1/2 transform -translate-x-1/2 w-full bg-[#083344]/90 md:hidden rounded-lg shadow-lg`}
      >
        <ul className="flex flex-col items-center gap-2 py-4">
          {sections.map(({ name, id }) => (
            <li key={id}>
              <ScrollLink
                to={id}
                smooth={true}
                duration={500}
                offset={-70}
                className={`${
                  activeLink === name ? 'bg-[#0C5769]' : ''
                } text-white font-semibold hover:text-[#23a6c7] text-sm cursor-pointer rounded-full px-4 py-2 transition-colors duration-700`}
                onClick={() => {
                  setActiveLink(name);
                  setIsMenuOpen(false); // Close menu after click
                }}
                aria-current={activeLink === name ? 'page' : undefined}
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      <span className="mx-3">
        <Toggler />
      </span>
    </div>
  );
}
