import Image from 'next/image';
import Navbar from '../components/Navbar';
import profilePic from 'src/profilePic.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col bg-gray-100">
      <Navbar />
      <div className="container mx-auto justify-center">
        <div className="col-span-1 w-3/5 mx-auto mt-3">
          <Image
            className="rounded-full shadow-lg"
            src={profilePic}
            alt="My Photo"
            width={200}
            height={200}
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold pt-8 text-gray-800">
            Hello 👋
          </h1>
          <h1 className="text-4xl pt-4 font-semibold text-gray-800">
            I&apos;m Paul.
          </h1>
          <div className="mt-9">
            <p className="text-xl w-full md:w-3/5 text-left text-gray-800">
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
            <p className="text-xl w-full md:w-3/5 text-gray-800">
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
                href="https://github.com/makeitsough"
                className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              .
            </p>
            <br />
            <p className="text-xl w-full md:w-3/5  text-gray-800">
              I get a ton of value out of books and conversations — feel free to
              connect and or share high-impact content from your bookshelf.
            </p>
            <br />
            <br />
          </div>
        </div>
        <Link
          href="https://github.com/makeitsough"
          className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="overflow-hidden max-w-full shadow-sm">
            <img
              className="ml-5 "
              src="https://ghchart.rshah.org/409ba5/makeitsough"
              height={300}
              width={600}
              alt="Github chart"
            />
          </div>
        </Link>
      </div>
    </main>
  );
}
