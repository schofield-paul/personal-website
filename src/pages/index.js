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
  const secondDivRef = React.createRef();

  const handleScrollToSecondDiv = () => {
    secondDivRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-sky-950">
      <main className="mx-auto max-w-2xl pb-10 px-4">
        <div className="pt-5 pl-2">
          <span className="cursor-pointer" onClick={handleScrollToSecondDiv}>
            ◻️
          </span>
        </div>
        <h2 className="text-slate-500 pt-4 px-2 text-5xl font-extralight">
          Portfolio
        </h2>

        <h1 className="text-3xl font-light pt-5 px-2 text-left text-slate-400">
          About me
        </h1>
        <div className="text-left text-xl px-2 text-slate-400 font-light">
          <p className="pt-4 mt-2">
            Hey there, <span className="emoji">👋</span>.
            <br />
          </p>
          <p className="pt-5">I'm a software Engineer living in NYC 🗽</p>
          <p className="pt-5">
            Prior startup experience at{' '}
            <Link
              href="https://www.lithic.com/"
              className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lithic{' '}
            </Link>{' '}
            <span className="ml-0.5 mr-1">💳,</span>
            where I worked on chargeback and dispute ops for consumer card
            products (Privacy.com)
          </p>

          <Link
            href="https://github.com/schofield-paul"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link mt-8"
          >
            <FaGithub
              className="text-sky-500 hover:text-slate-900 transition duration-600"
              size={25}
            />
          </Link>

          <p className="pt-5 pl-1 font-light text-slate-400">
            Feel free to connect with me on{' '}
            <Link
              href="https://www.linkedin.com/in/paul-schofield-io/"
              className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </Link>{' '}
          </p>
          <p className="pt-9 pb-96 mb-12 pl-1  text-slate-400 text-lg">
            <span
              className="cursor-pointer hover:text-emerald-400 duration-200 ease-in-out"
              onClick={handleScrollToSecondDiv}
            >
              {' '}
              ↓
            </span>
          </p>
        </div>
        <div ref={secondDivRef} className="pt-6 pl-2">
          <span className="cursor-pointer" onClick={handleScrollToSecondDiv}>
            ◻️
          </span>
        </div>
        <h1 className="text-slate-500 pt-4 px-1 text-5xl font-extralight">
          Projects
        </h1>
        <ProjectRsm></ProjectRsm>
        <ProjectHwr></ProjectHwr>
        <ProjectEcm></ProjectEcm>
        <div className="text-center text-xl pt-6 text-slate-500 font-light">
          Bye! 👋
        </div>
      </main>
    </div>
  );
}

/*
 <p className="pt-3 mt-2">
            More recently, I've been designing digital experiences through
            Fullstack Academy and AWS.
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






        <Image
          className="rounded-full shadow-lg mx-auto"
          src={profilePic}
          alt="My Photo"
          width={185}
          height={185}
        />
*/
