import Image from 'next/image';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import HowlrTM1 from 'src/howlr1.png';
import HowlrTM2 from 'src/howlr2.png';
import HowlrTM3 from 'src/howlr3.png';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [enlarged, setEnlarged] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const toggleEnlarged = (imageSrc) => {
    if (enlarged) {
      setEnlarged(false);
      setEnlargedImage(null);
    } else {
      setEnlarged(true);
      setEnlargedImage(imageSrc);
    }
  };

  return (
    <main className='h-screen w-full flex flex-col'>
      <Navbar></Navbar>
      <div className='container mx-auto text-left'>
        <div className='col-span-1 w-3/5 mx-auto mt-20'>
          <h1 className='text-3xl font-bold'>
            <Link
              href='https://howlr.netlify.app/'
              className='text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out'
              target='_blank'
              rel='noopener noreferrer'
            >
              Howlr
            </Link>
          </h1>
          <p className='mt-4'>
            A social media application for connecting pet owners with
            pet-friendly resources, local events and dog sitters. The app uses a
            two-sided marketplace structure. I specifically worked on the Google
            Maps API integration, sitter discovery page, and search primitives
            for the site. The project was build with{' '}
            <Link
              href='https://www.linkedin.com/in/forhad-zinnah/'
              className='text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out'
              target='_blank'
              rel='noopener noreferrer'
            >
              Forhad Zinnah
            </Link>
            {', '}
            <Link
              href='https://www.linkedin.com/in/allyssadeorocki/'
              className='text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out'
              target='_blank'
              rel='noopener noreferrer'
            >
              Allyssa Deorocki
            </Link>
            , and{' '}
            <Link
              href='https://www.linkedin.com/in/nica-weisinger/'
              className='text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out'
              target='_blank'
              rel='noopener noreferrer'
            >
              Nica Weisinger
            </Link>
            .
          </p>
          <div className='flex mx-auto'>
            <div className='box-content h-32 w-32 p-4'>
              <Image
                className='object-contain object-center hover:opacity-75 transition duration-200 ease-in-out cursor-pointer'
                src={HowlrTM1}
                alt='My Photo'
                onClick={() => toggleEnlarged(HowlrTM1)}
              />
              {enlarged && enlargedImage === HowlrTM1 && (
                <div
                  className='fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center z-50 '
                  onClick={() => toggleEnlarged(null)}
                >
                  <Image src={HowlrTM1} alt='My Photo' />
                </div>
              )}
            </div>

            <div className='box-content h-32 w-32 p-4'>
              <Image
                className='object-contain object-center hover:opacity-75 transition duration-200 ease-in-out cursor-pointer'
                src={HowlrTM2}
                alt='My Photo'
                onClick={() => toggleEnlarged(HowlrTM2)}
              />
              {enlarged && enlargedImage === HowlrTM2 && (
                <div
                  className='fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center z-50 '
                  onClick={() => toggleEnlarged(null)}
                >
                  <Image src={HowlrTM2} alt='My Photo' />
                </div>
              )}
            </div>

            <div className='box-content h-32 w-32 p-4'>
              <Image
                className='object-contain object-center  hover:opacity-75 transition duration-200 ease-in-out cursor-pointer'
                src={HowlrTM3}
                alt='My Photo'
                onClick={() => toggleEnlarged(HowlrTM3)}
              />
              {enlarged && enlargedImage === HowlrTM3 && (
                <div
                  className='fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center z-50 '
                  onClick={() => toggleEnlarged(null)}
                >
                  <Image src={HowlrTM3} alt='My Photo' />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
