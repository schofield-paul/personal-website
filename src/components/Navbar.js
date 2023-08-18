import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; // Import Image component from Next.js
import logo from 'src/logo.jpeg';

export default function Navbar() {
  const [hovering, setHovering] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex justify-between items-center bg-white">
      <div className="hover-name-container">
        <Image
          className={`logo-image ${hovering ? 'hovering' : ''}`}
          src={logo}
          alt="My Photo"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          width={50} // Set the width of your logo
          height={50} // Set the height of your logo
        />
        <p
          className={`text-gray-800 font-medium text-lg mt-5 ml-5 hover-name ${
            hovering ? 'hovering' : ''
          }`}
        >
          Paul Schofield
        </p>
      </div>
      <div className="relative">
        <p
          className="text-gray-800 font-medium text-lg mt-5 mr-6 hover:text-blue-400 transition duration-200 ease-in-out cursor-pointer"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faBars} />
        </p>
        {dropdownVisible && (
          <div className="absolute right-2 mt-2 bg-white border border-gray-300 rounded shadow">
            <p className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200 ease-in-out">
              <Link href="/projects">Projects</Link>
            </p>
            <p className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200 ease-in-out">
              <Link href="/readinglist">Reading List</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
