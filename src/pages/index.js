import Image from 'next/image';
import Navbar from '../components/Navbar';
import profilePic from 'src/profilePic.png';

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
        <div className='col-span-2 text-center text-left'>
          <h1 className='text-4xl font-bold pt-7 ml-5 mt-6'>Hello 👋</h1>
          <p className='text-xl mt-4 mr-8 '>I'm Paul</p>
          <div className=''>
            <p className='text-xl mt-6 mr-10'>
              I'm a software engineer living in New York. Prior to ...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
