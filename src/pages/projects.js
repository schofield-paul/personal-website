import Navbar from '../components/Navbar';

export default function Projects() {
  return (
    <main className='h-screen w-full flex flex-col'>
      <Navbar></Navbar>
      <div className='container mx-auto text-left'>
        <div className='col-span-1 w-3/5 mx-auto mt-20'>
          <h1 className='text-3xl font-bold'>Howlr</h1>
          <p className='mt-5'>
            A social applicaiton designed to connect pet owners with local
            events, dog sitters, and other pet-friendly resources. The app is a
            two-sided marketplace and features the ability to connect with
            others, discover relevant events and services for one's pets. I
            integrated with the Google Maps API design and implemented API
            routes for pet sitters. The project was build with...
          </p>
        </div>
      </div>
    </main>
  );
}
