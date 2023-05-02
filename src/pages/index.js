import Image from 'next/image';
import Navbar from '../components/Navbar';
import profilePic from 'src/profilePic.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-2/5 flex justify-center mt-10">
          <div className="rounded-full overflow-hidden p-6">
            <Image
              className="rounded-full"
              src={profilePic}
              alt="My Photo"
              width={205}
              height={205}
            />
          </div>
        </div>
        <div className="md:w-3/5 flex flex-col justify-center p-5">
          <h1 className="text-4xl font-bold pt-7">Hi! I&apos;m Paul 👋</h1>
          <div className="mt-8">
            <p className="text-xl w-full md:w-3/5">
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
            <p className="text-xl w-full md:w-3/5">
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
            <p className="text-xl w-full md:w-3/5">
              I get a ton of value out of books and conversations — feel free to
              connect and or share high-impact content from your bookshelf.
            </p>
            <br />
            <br />
          </div>
          <Link
            href="https://github.com/makeitsough"
            className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="ml-5"
              src="https://ghchart.rshah.org/409ba5/makeitsough"
              height={300}
              width={600}
              alt="Github chart"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
