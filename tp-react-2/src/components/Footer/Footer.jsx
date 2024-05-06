import { Link } from 'react-router-dom';
import Logo from '../../img/Weather.png';
import { IoLogoGithub } from "react-icons/io5";
function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800 ">
      <div className="w-full max-w-screen-xl mx-auto p-3 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src={Logo} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Weather Home</span>


            </a>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className='mr-6'>
              <a href="https://github.com/manuelNagel/PWA/tree/main/tp-react-2" className="hover:underline mr-96"><IoLogoGithub className="text-3xl pr-1 pt-2" /></a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Manuel Nagel</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Pablo Navarro</a>
            </li>

          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Home</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
export default Footer;
