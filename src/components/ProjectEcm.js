import Link from 'next/link';
import Image from 'next/image';
import ecom1 from 'src/assets/ecom1.png';
import ecom2 from 'src/assets/ecom2.png';
import ecom3 from 'src/assets/ecom3.png';
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

  const images = [
    { src: ecom1, alt: 'My Photo' },
    { src: ecom2, alt: 'My Photo' },
    { src: ecom3, alt: 'My Photo' },
  ];

  return (
    <div className="mx-auto mt-2 mb-12">
      <h1 className="text-3xl font-light pt-3 px-1 text-left ">
        <Link
          href="https://github.com/ecom-team-saber/BookStore"
          className="text-slate-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-Bookstore
        </Link>
      </h1>
      <p className="text-left text-xl pt-4 px-1 text-slate-400 font-light">
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
      {
        <div className="flex flex-row justify-around pt-1 px-1">
          {images.map((image, index) => (
            <div className="w-1/3 p-4 m-2 flex-shrink-0" key={index}>
              <div className="h-full w-full">
                <Image
                  className="h-full w-full object-cover object-center hover:opacity-75 transition duration-200 ease-in-out cursor-pointer border border-gray-200"
                  src={image.src}
                  alt={image.alt}
                  onClick={() => toggleEnlarged(image.src)}
                />
                {enlarged && enlargedImage === image.src && (
                  <div
                    className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center z-50 max-w-screen"
                    onClick={() => toggleEnlarged(null)}
                  >
                    <div className="max-w-2xl">
                      <Image src={image.src} alt={image.alt} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}
