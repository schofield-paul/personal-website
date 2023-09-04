import Image from 'next/image';
import Navbar from '../components/Navbar';
import profilePic from 'src/assets/profilePic.png';
import Link from 'next/link';
import ProjectHwr from '../components/ProjectHwr';
import ProjectEcm from '../components/ProjectEcm';
import ProjectRsm from '../components/ProjectRsm';
import { FaGithub } from 'react-icons/fa';
import React from 'react';

export default function Home() {
  const firstDivRef = React.createRef();
  const secondDivRef = React.createRef();

  const handleScrollToSecondDiv = () => {
    secondDivRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToFirstDiv = () => {
    firstDivRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-2xl mb-20 text-center">
        <div className="pt-10" ref={firstDivRef}>
          <span className="cursor-pointer" onClick={handleScrollToSecondDiv}>
            ◻️
          </span>
        </div>
        <h1 className="text-4xl font-medium pt-10 px-2 text-gray-60 text-left">
          About me
        </h1>
        <div className="text-left text-xl px-2 text-gray-600">
          <p className="pt-6 mt-2 text-gray-700">
            Hi there, <span className="emoji">👋</span>.
            <br />
            <br />
            Software Engineer based in New York.
            <br />
            <br />
            Prior experience at{' '}
            <Link
              href="https://www.lithic.com/"
              className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lithic
            </Link>
            —where I worked on dispute and chargeback Ops for the consumer card
            product.
          </p>
          <p className="pt-6 mt-2">
            This exposed me to technical problems, which led me to learn to
            develope software at Fullstack Academy.
          </p>
          <br />
          <p className="pt-2">
            Since finishing earlier this year, I have been leveling up{' '}
            <Link
              href="https://www.lithic.com/"
              className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS
            </Link>{' '}
            knowledge and doubling down in Frontend.
          </p>
          <br />
          <p className="pt-2">
            Drop me a note on{' '}
            <Link
              href="https://www.linkedin.com/in/paul-schofield-io/"
              className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </Link>{' '}
            or paul.schofield.us at gmail if you'd like to connect - always
            happy to chat
          </p>
        </div>
        <Link
          href="https://github.com/schofield-paul"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link mt-11"
        >
          <FaGithub
            className="text-blue-400 hover:text-gray-900 transition duration-600"
            size={25}
          />
        </Link>
        <div ref={secondDivRef} className="pt-10">
          <span className="cursor-pointer" onClick={handleScrollToFirstDiv}>
            ◻️
          </span>
        </div>
        <h1 className="text-4xl font-medium pt-14 text-gray-700 text-center">
          Projects
        </h1>
        <ProjectRsm></ProjectRsm>
        <ProjectHwr></ProjectHwr>
        <ProjectEcm></ProjectEcm>
      </main>
    </div>
  );
}

/*
        <Image
          className="rounded-full shadow-lg mx-auto"
          src={profilePic}
          alt="My Photo"
          width={185}
          height={185}
        />
*/
