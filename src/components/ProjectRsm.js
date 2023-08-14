import Link from 'next/link';
import Image from 'next/image';
import ResmTM1 from 'src/resm1.png';
import ResmTM2 from 'src/resm2.png';
import ResmTM3 from 'src/resm3.png';
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
  return (
    <div className="col-span-1 w-3/5 mx-auto mt-20">
      <h1 className="text-3xl font-bold">
        <Link
          href="https://paulschofieldresume.com/"
          className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cloud Resume
        </Link>
      </h1>
      <p className="mt-4">
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
      <div className="flex flex-row justify-between">
        <div className="w-1/3 p-4">
          <div className="h-full w-full">
            <Image
              className="h-full w-full object-cover object-center hover:opacity-75 transition duration-200 ease-in-out cursor-pointer border border-gray-200"
              src={ResmTM1}
              alt="My Photo"
              onClick={() => toggleEnlarged(ResmTM1)}
            />
            {enlarged && enlargedImage === ResmTM1 && (
              <div
                className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center z-50 max-w-screen"
                onClick={() => toggleEnlarged(null)}
              >
                <div className="max-w-2xl">
                  <Image src={ResmTM1} alt="My Photo" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-1/3 p-4">
          <div className="h-full w-full">
            <Image
              className="h-full w-full object-cover object-center hover:opacity-75 transition duration-200 ease-in-out cursor-pointer border border-gray-200"
              src={ResmTM2}
              alt="My Photo"
              onClick={() => toggleEnlarged(ResmTM2)}
            />
            {enlarged && enlargedImage === ResmTM2 && (
              <div
                className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center z-50 max-w-screen"
                onClick={() => toggleEnlarged(null)}
              >
                <div className="max-w-2xl">
                  <Image src={ResmTM2} alt="My Photo" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-1/3 p-4">
          <div className="h-full w-full">
            <Image
              className="h-full w-full object-cover object-center  hover:opacity-75 transition duration-200 ease-in-out cursor-pointer border border-gray-200"
              src={ResmTM3}
              alt="My Photo"
              onClick={() => toggleEnlarged(ResmTM3)}
            />
            {enlarged && enlargedImage === ResmTM3 && (
              <div
                className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center z-50 max-w-screen"
                onClick={() => toggleEnlarged(null)}
              >
                <div className="max-w-2xl">
                  <Image src={ResmTM3} alt="My Photo" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
