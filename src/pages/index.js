import Image from 'next/image';
import Navbar from '../components/Navbar';
import profilePic from 'src/profilePic.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col bg-gray-100">
      <Navbar />
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full shadow-lg"
            src={profilePic}
            alt="My Photo"
            width={185}
            height={185}
          />
          <div className="text-center">
            <h1 className="text-4xl font-medium pt-8 text-gray-700">
              Hello 👋
            </h1>
            <h1 className="text-4xl font-medium pt-2 pl-2 text-gray-700">
              I&apos;m Paul.
            </h1>
          </div>
          <div className="col-span text-left">
            <p className="text-gray-600 max-w-md text-left text-xl pt-6">
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
            <p className="text-gray-600 max-w-md m-0 text-left text-xl pt-4">
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
            <p className="text-gray-600 max-w-md ml-0 text-left text-xl pt-4">
              {' '}
              I get a ton of value out of books and conversations — feel free to
              connect and or share high-impact content from your bookshelf.
            </p>
          </div>
          <Link
            href="https://github.com/makeitsough"
            className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center pt-8">
              <div className="mx-auto overflow-hidden max-w-full shadow-sm">
                <img
                  className="mx-auto"
                  src="https://ghchart.rshah.org/409ba5/makeitsough"
                  height={300}
                  width={600}
                  alt="Github chart"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}