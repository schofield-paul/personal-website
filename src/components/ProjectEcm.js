import Link from 'next/link';
import Image from 'next/image';
import ecom1 from 'src/ecom1.png';
import ecom2 from 'src/ecom2.png';
import ecom3 from 'src/ecom3.png';
import { useState, useEffect } from 'react';

export default function ProjectEcm() {
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
    <div className="col-span-1 w-3/5 mx-auto mt-10">
      <h1 className="text-3xl font-bold">
        <Link
          href="https://github.com/ecom-team-saber/BookStore"
          className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          ecommerce bookstore
        </Link>
      </h1>
      <p className="mt-4">
        An ecommerce website inspired by Amazon. Features include guest
        checkout, easy navigability, and admin persmissions. I specifically
        built the checkout and admin API routes and components. The project was
        built with{' '}
        <Link
          href="https://www.linkedin.com/in/karstenfisk/"
          className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Karsten Fisk
        </Link>
        ,{' '}
        <Link
          href="https://www.linkedin.com/in/benjamin-agalliu/"
          className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Benjamin Agalliu
        </Link>
        , and{' '}
        <Link
          href="https://www.linkedin.com/in/sshih1116/"
          className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stephen Shih
        </Link>
        .
      </p>
      <div className="flex flex-row justify-between">
        <div className="w-1/3 p-4">
          <div className="h-full w-full">
            <Image
              className="h-full w-full object-cover object-center  hover:opacity-75 transition duration-200 ease-in-out cursor-pointer border border-gray-200"
              src={ecom1}
              alt="My Photo"
              onClick={() => toggleEnlarged(ecom1)}
            />
            {enlarged && enlargedImage === ecom1 && (
              <div
                className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center z-50 max-w-screen"
                onClick={() => toggleEnlarged(null)}
              >
                <div className="max-w-2xl">
                  <Image src={ecom1} alt="My Photo" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="h-full w-full">
            <Image
              className="h-full w-full object-cover object-center  hover:opacity-75 transition duration-200 ease-in-out cursor-pointer border border-gray-200"
              src={ecom2}
              alt="My Photo"
              onClick={() => toggleEnlarged(ecom2)}
            />
            {enlarged && enlargedImage === ecom2 && (
              <div
                className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center z-50 max-w-screen"
                onClick={() => toggleEnlarged(null)}
              >
                <div className="max-w-2xl">
                  <Image src={ecom2} alt="My Photo" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="h-full w-full">
            <Image
              className="h-full w-full object-cover object-center  hover:opacity-75 transition duration-200 ease-in-out cursor-pointer border border-gray-200"
              src={ecom3}
              alt="My Photo"
              onClick={() => toggleEnlarged(ecom3)}
            />
            {enlarged && enlargedImage === ecom3 && (
              <div
                className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center z-50 max-w-screen"
                onClick={() => toggleEnlarged(null)}
              >
                <div className="max-w-2xl">
                  <Image src={ecom3} alt="My Photo" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
