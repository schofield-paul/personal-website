import Link from 'next/link';
import Image from 'next/image';
import HowlrTM1 from 'src/assets/howlr1.png';
import HowlrTM2 from 'src/assets/howlr2.png';
import HowlrTM3 from 'src/assets/howlr3.png';
import { useState, useEffect } from 'react';

export default function ProjectHwr() {
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
    { src: HowlrTM3, alt: 'My Photo' },
    { src: HowlrTM1, alt: 'My Photo' },
    { src: HowlrTM2, alt: 'My Photo' },
  ];

  return (
    <div className="mx-auto mt-2 mb-16">
      <h1 className="text-3xl font-light pt-3 px-1 text-left ">
        <Link
          href="https://howlr.netlify.app/"
          className="text-slate-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Howlr
        </Link>
      </h1>
      <p className="text-left text-xl pt-4 px-1 text-slate-400 font-light">
        A social media application for connecting pet owners with pet-friendly
        resources, local events and dog sitters. The app uses a two-sided
        marketplace structure. I specifically worked on the Google Maps API
        integration, sitter discovery page, and search primitives for the site.
        The project was built with{' '}
        <Link
          href="https://www.linkedin.com/in/forhad-zinnah/"
          className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forhad Zinnah
        </Link>
        {', '}
        <Link
          href="https://www.linkedin.com/in/allyssadeorocki/"
          className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Allyssa Deorocki
        </Link>
        , and{' '}
        <Link
          href="https://www.linkedin.com/in/nica-weisinger/"
          className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nica Weisinger
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
