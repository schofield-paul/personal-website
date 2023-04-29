/** @format */

import Image from 'next/image';
import { Inter } from 'next/font/google';
import profilePic from 'src/profilePic.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex justify-left items-center">
          <p className="text-gray-800 font-medium text-lg mt-5 ml-3">
            Paul Schofield
          </p>
        </div>
        <div className="flex justify-right items-center">
          <p className="text-gray-800 font-medium text-lg mt-5 mr-6">About</p>
        </div>
      </div>
      <div className="flex flex-row h-full w-full">
        <div className="flex-1 p-8 text-center">
          <h1 className="text-4xl font-bold pt-4">Hello 👋</h1>
          <p className="mt-4">I'm Paul</p>
        </div>
        <div className="flex-1 flex justify-center items-center mt-4 mr-5 mt-[-500px]">
          <div className="rounded-full overflow-hidden">
            <Image src={profilePic} alt="My Photo" width={225} height={225} />
          </div>
        </div>
      </div>
    </main>
  );
}
