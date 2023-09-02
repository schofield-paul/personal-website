import Image from 'next/image';
import Navbar from '../components/Navbar';
import profilePic from 'src/assets/profilePic.png';
import Link from 'next/link';
import ProjectHwr from '../components/ProjectHwr';
import ProjectEcm from '../components/ProjectEcm';
import ProjectRsm from '../components/ProjectRsm';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-2xl text-center">
        <Image
          className="rounded-full shadow-lg mx-auto"
          src={profilePic}
          alt="My Photo"
          width={185}
          height={185}
        />
        <h1 className="text-4xl font-medium pt-8 text-gray-700">Hello 👋</h1>
        <div className="text-left text-xl px-2 text-gray-600">
          <p className="pt-6">
            I&apos;m a Software Engineer based in Brooklyn, NY. Prior to
            engineering, I worked in dispute operations at{' '}
            <Link
              href="https://www.lithic.com/"
              className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lithic
            </Link>
            , a card issuer processor.
          </p>
          <br />
          <p className="pt-2">
            You can find me on{' '}
            <Link
              href="https://www.linkedin.com/in/paul-schofield-io/"
              className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </Link>{' '}
            or{' '}
            <Link
              href="https://github.com/schofield-paul"
              className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            .
          </p>
          <br />
          <p className="pt-2">
            {' '}
            I get a ton of value out of books and conversations — feel free to
            connect and or share high-impact content from your bookshelf.
          </p>
        </div>
        <div className="pt-24">◻️</div>
        <h1 className="text-4xl font-medium pt-14 text-gray-700 text-center">
          Projects
        </h1>
        <ProjectRsm></ProjectRsm>
      </main>
    </div>
  );
}
