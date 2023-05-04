import Navbar from '../components/Navbar';
import ProjectHwr from '../components/ProjectHwr';
import ProjectEcm from '../components/ProjectEcm';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen w-full bg-gray-50">
        <div className="container flex flex-col mx-auto text-left">
          <ProjectHwr></ProjectHwr>
          <ProjectEcm></ProjectEcm>
        </div>
      </main>
    </div>
  );
}
