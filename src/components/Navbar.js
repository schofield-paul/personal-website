import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-opacity-75 fixed w-full top-0 pt-0.5 pb-1 transition duration-300 ease-in-out bg-slate-500">
      <Link
        href="https://www.linkedin.com/in/paul-schofield-io/"
        className="inline text-amber-100 font-normal text-sm pt-1.5 pb-1.5 pl-6 hover:text-sky-500 transition duration-300 ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        Paul Schofield
      </Link>
    </div>
  );
}
