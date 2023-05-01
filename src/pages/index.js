import Image from 'next/image';
import Navbar from '../components/Navbar';
import profilePic from 'src/profilePic.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='h-screen w-full flex flex-col'>
      <Navbar />
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-1 flex justify-center items-center'>
          <div className='rounded-full overflow-hidden p-6'>
            <Image
              className='rounded-full'
              src={profilePic}
              alt='My Photo'
              width={205}
              height={205}
            />
          </div>
        </div>
        <div class='col-span-2 text-center lg:text-left'>
          <h1 class='text-4xl font-bold pt-7 ml-5 mt-6'>Hi! I'm Paul 👋</h1>
          <div class='mt-8 lg:mt-10 ml-5 mr-10'>
            <p class='text-xl'>
              I'm a Software Engineer based in Brooklyn, NY. Prior to
              engineering, I worked in dispute operations at{' '}
              <Link
                href='https://www.lithic.com/'
                className='text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out'
                target='_blank'
                rel='noopener noreferrer'
              >
                Lithic
              </Link>
              , a card issuer processor.
            </p>
            <br />
            <p class='text-xl'>
              You can find me on{' '}
              <Link
                href='https://www.linkedin.com/in/paul-schofield-io/'
                className='text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out'
                target='_blank'
                rel='noopener noreferrer'
              >
                Linkedin
              </Link>{' '}
              or{' '}
              <Link
                href='https://github.com/makeitsough'
                className='text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </Link>
              .
            </p>
            <br />
            <p class='text-xl'>
              Lastly, I get a ton of value out of books and conversations — feel
              free to connect and or share high-impact content from your
              bookshelf.
            </p>
            <br />
            <p class='text-xl'></p>
          </div>
        </div>
      </div>
    </main>
  );
}
