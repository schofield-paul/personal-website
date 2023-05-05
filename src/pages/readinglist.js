import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function ReadingList() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full bg-gray-50">
        <div className="container mx-auto flex flex-col text-left">
          <div className="col-span-1 mx-auto mt-20 w-3/5">
            <h1 className="text-3xl font-bold text-gray-800">Reading List</h1>
            <div className="max-w-xl pt-3 text-left text-xl text-gray-800">
              <p className="pt-2">
                Iterative list of some of the most impactful engineering
                resources I&apos;ve come accross.
              </p>
              <div className="max-w-xl pb-3 pt-3 text-left text-xl leading-relaxed text-gray-700">
                <b className="pt-3">Currently Reading:</b>
                <li>
                  {' '}
                  <Link
                    href="https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/B08X7MNTCX/ref=sr_1_1?crid=392D0IDM324AG&keywords=the+clean+coder&qid=1683230221&s=books&sprefix=the+clean+coder%2Cstripbooks%2C96&sr=1-1"
                    className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Clean Coder
                  </Link>{' '}
                  - Robert Martin
                </li>
              </div>
              <div className="max-w-xl pb-3 pt-1 text-left text-xl leading-relaxed text-gray-700">
                <b className="pt-3">Design and Engineering</b>
                <li>
                  {' '}
                  <Link
                    href="https://www.amazon.com/Philosophy-Software-Design-John-Ousterhout/dp/1732102201"
                    className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A Philosophy of Software Design
                  </Link>{' '}
                  - John Ousterhout
                </li>
                <li>
                  {' '}
                  <Link
                    href="https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations-ebook/dp/B07B9F83WM/ref=sr_1_3?crid=1R2V361JJYR02&keywords=accelerate+software&qid=1683229801&s=books&sprefix=accelerate+softwar%2Cstripbooks%2C91&sr=1-3"
                    className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Accelerate
                  </Link>{' '}
                  - Nicole Forsgren, Jez Humble, & Gene Kim
                </li>
                <li>
                  {' '}
                  <Link
                    href="https://www.amazon.com/Staff-Engineers-Path-Tanya-Reilly-ebook/dp/B0BG16Y553/ref=sr_1_1?crid=MFKNGCZPTJK&keywords=the+staff+engineers+path+tanya&qid=1683229841&s=books&sprefix=the+staff+engineers+path+tanya%2Cstripbooks%2C85&sr=1-1"
                    className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Staff Engineer&apos;s Path
                  </Link>{' '}
                  - Tanya Reilly
                </li>
                <li>
                  {' '}
                  <Link
                    href="https://www.amazon.com/Thinking-Systems-Donella-H-Meadows-ebook/dp/B005VSRFEA/ref=sr_1_1?crid=1J52WURYJSKE9&keywords=thinking+in+systems+donna&qid=1683229896&s=books&sprefix=thinking+in+systems+donna%2Cstripbooks%2C122&sr=1-1"
                    className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Thinking in Systems
                  </Link>{' '}
                  - Donella Meadows
                </li>
                <li>
                  {' '}
                  <Link
                    href="https://www.amazon.com/Staff-Engineer-Leadership-beyond-management-ebook/dp/B08RMSHYGG/ref=sr_1_1_sspa?crid=14YSVFPBRVKCW&keywords=staff+engineer+will+larson&qid=1683230594&s=books&sprefix=staff+engineer+will+larson%2Cstripbooks%2C82&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUU1JVDlETVQ0M0xUJmVuY3J5cHRlZElkPUEwMzg0NjcxMjY4R1lMOTBVRjM5QiZlbmNyeXB0ZWRBZElkPUEwODY4NzI4MVZEM1RZUlhaUUg4OCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
                    className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Staff Engineer:
                  </Link>{' '}
                  Leadership beyond the management track - Will Larson
                </li>
                <li>
                  {' '}
                  <Link
                    href="https://www.amazon.com/Managers-Path-Leaders-Navigating-Growth/dp/9352135474/ref=sr_1_4?crid=2GUJ1QP5PCH5I&keywords=the+managers+path+camille&qid=1683230635&s=books&sprefix=the+managers+path+camille%2Cstripbooks%2C87&sr=1-4"
                    className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Manager&apos;s Path:
                  </Link>{' '}
                  A Guide for Tech Leaders Navigating Growth and Change -
                  Camille Fournier
                </li>
                <li>
                  <Link
                    href="https://www.amazon.com/Building-Career-Software-Comprehensive-Industry/dp/1484261461"
                    className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Building a Career in Software
                  </Link>{' '}
                  - Daniel Heller
                </li>
                <div className="max-w-xl pb-3 pt-3 text-left text-xl leading-relaxed text-gray-700">
                  <b className="pt-3">Queue:</b>
                  <li>
                    <Link
                      href="https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563"
                      className="text-blue-400 hover:text-orange-700 transition duration-200 ease-in-out"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Getting Things Done
                    </Link>{' '}
                    - Davind Allan
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
