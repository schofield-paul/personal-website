import Link from 'next/link';
import Image from 'next/image';
import ResmTM1 from 'src/assets/resm1.png';
import ResmTM2 from 'src/assets/resm2.png';
import ResmTM3 from 'src/assets/resm3.png';
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
    { src: ResmTM1, alt: 'My Photo' },
    { src: ResmTM2, alt: 'My Photo' },
    { src: ResmTM3, alt: 'My Photo' },
  ];

  return (
    <div className="mx-auto mt-8 mb-16">
      <h1 className="text-3xl font-semibold">
        <Link
          href="https://paulschofieldresume.com/"
          className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cloud Resume
        </Link>
      </h1>
      <p className="mt-6">
        A serverless website deployed using AWS Lambda, DynamoDB, CloudFront
        edge distributions and CI/CD actions with infrastructure-as-code. See
        link to the cloud resume challenge{' '}
        <Link
          href="https://cloudresumechallenge.dev/docs/the-challenge/aws/"
          className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          page
        </Link>
        {'. '}
        See source on{' '}
        <Link
          href="https://github.com/makeitsough/cloud-resume"
          className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
        {'. '}
      </p>
      <div className="flex flex-row justify-between pt-4">
        {images.map((image, index) => (
          <div className="w-1/3 p-4" key={index}>
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
    </div>
  );
}
