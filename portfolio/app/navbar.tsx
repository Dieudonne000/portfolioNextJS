/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Toggler from './toggler';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Hero');

  // Navigation sections and their corresponding IDs
  const sections = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'aboutme' },
    // { name: 'Techstack', id: 'techstack' },
    { name: 'Project', id: 'project' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  // Update the active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80; // Add offset for fixed navbar height
      sections.forEach(({ name, id }) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveLink(name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <>
      {/* Navbar */}
      <div className="navbar backdrop-blur-sm z-10 bg-[#083344]/70 rounded-full px-1 w-fit mx-auto mt-4 fixed top-0 left-1/2 transform -translate-x-1/2">
        <ul className="flex px-1 gap-1">
          {sections.map(({ name, id }) => (
            <li key={id}>
              <ScrollLink
                to={id} // Match the ID of the section
                smooth={true} // Enable smooth scrolling
                duration={500} // Scroll duration
                offset={-70} // Adjust for fixed navbar height
                className={`${
                  activeLink === name ? 'bg-[#0C5769]' : ''
                } text-white m-0 font-semibold hover:text-[#23a6c7] text-sm cursor-pointer rounded-full px-4 py-2 transition-colors duration-700`}
                onClick={() => setActiveLink(name)}
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <span className="mx-2">
          <Toggler />
        </span>
      </div>
    </>
  );
}
