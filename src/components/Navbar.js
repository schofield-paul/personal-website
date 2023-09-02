import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white">
      <div className="flex items-center mr-auto">
        <p className="text-gray-800 font-medium text-lg mt-5 ml-5 hover:text-blue-400 transition duration-200 ease-in-out">
          <Link href="/">Paul Schofield</Link>
        </p>
      </div>
    </div>
  );
}
