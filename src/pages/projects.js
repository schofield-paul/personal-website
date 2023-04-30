import Navbar from '../components/Navbar';

export default function Projects() {
  return (
    <main className='h-screen w-full flex flex-col'>
      <Navbar></Navbar>
      <div className='container mx-auto'>
        <div className='col-span-1 text-center w-3/5 mx-auto mt-20'>
          <h1 className='text-4xl font-bold'>Loren Ipsum</h1>
          <p className='mt-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            justo purus. Donec molestie ante eu nulla vehicula, quis dignissim
            risus malesuada. Maecenas laoreet faucibus lectus, sit amet.
          </p>
          <br />
          <p>
            Phasellus ornare magna auctor urna sagittis, id ullamcorper velit
            accumsan. Sed id tortor justo. Integer sollicitudin, ipsum eget
            euismod convallis, sapien felis semper ante, in suscipit urna leo
          </p>
        </div>
      </div>
    </main>
  );
}
