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
            events, dog sitters, and other pet-friendly resources. The app uses
            a two-sided marketplace structure. I specifically worked on the
            Google Maps API integration, sitter discovery page, and search
            primitives for the site. The project was build with Forhad Zinnah,
            Allyssa Deorocki, and Nica Weisinger.
          </p>
        </div>
      </div>
    </main>
  );
}
