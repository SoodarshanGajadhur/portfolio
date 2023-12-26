import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { logo } from '../assets'
import { SectionWrapper } from '../hoc';

const Footer = () => {
  const [active, setActive] = useState("");

  return (

  <footer className="text-center text-white bg-tertiary rounded-2xl">
    <div className="container pt-9">
      <div className="mb-9 flex justify-center">
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={ () => {
            setActive("");
            window.scrollTo(0, 0);

          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Soodarshan &nbsp;
            <span className='sm:block hidden'>| CS Student</span>
          </p>
        </Link>
      </div>
    </div>

    {/* horizontal line */}
    <div className="bg-white h-[1px] w-full"></div>

    {/* <!--Copyright section--> */}
    <div
      className="p-4 text-center text-neutral-700 bg-black-100 dark:text-neutral-200">
      © 2023 Copyright:
      <a
        className="text-neutral-800 dark:text-neutral-400"
        href="/"
      >Soodarshan</a>
    </div>
  </footer>
  );
}

export default SectionWrapper(Footer, "footer")