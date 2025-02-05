import React from 'react'
import { FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import { FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer bg-slate-100 dark:bg-[#022631] text-[#0C5769] dark:text-white p-3">
  <aside className="grid-flow-col items-center">
    <img src="/Group 1 (1).svg" alt="logo" className='size-9' />
    <p className='font-light ftText'>
       MUNEZA Jean Dieudonné
      <br />
      All rights reserved @2025
    </p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <h6 className="footer-title text-[#022631] dark:text-white font-semibold">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a className='text-3xl btn-link link text-cyan-950 dark:text-[white]' href='https://www.instagram.com/m_di.os/' target='blank'>
       <FaInstagramSquare/>
      </a>
      <a className='text-3xl btn-link link text-cyan-950 dark:text-[white]' href='https://www.linkedin.com/in/munezajeandieudonne/' target='blank'>
        <FaLinkedin/>
      </a>
      <a className='text-3xl btn-link link text-cyan-950 dark:text-[white]' href='https://github.com/Dieudonne000' target='blank'>
       <FaGithub />
      </a>
    </div>
  </nav>
</footer>
  )
}

export default Footer