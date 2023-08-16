import Image from 'next/image';
import Navbar from '../components/Navbar';
import profilePic from 'src/profilePic.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen w-full bg-white">
        <div className="container mx-auto flex flex-col">
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
            </div>
            <div className="max-w-xl text-left text-xl px-2 text-gray-600">
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
              <p className="pt-2">
                {' '}
                I get a ton of value out of books and conversations — feel free
                to connect and or share high-impact content from your bookshelf.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
