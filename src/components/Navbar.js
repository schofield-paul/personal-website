import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className=" justify-between items-center bg-slate-500">
      <Link
        href="https://www.linkedin.com/in/paul-schofield-io/"
        className="inline text-slate-50 font-normal text-sm pt-1.5 pb-1.5 pl-6 hover:text-sky-500 transition duration-300 ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        Paul Schofield
      </Link>
    </div>
  );
}
