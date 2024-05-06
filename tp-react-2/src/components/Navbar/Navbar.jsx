import { FaSearchLocation } from "react-icons/fa";
import Logo from '../../img/Weather.png';
import { Outlet, Link } from "react-router-dom";


export default function Navbar() {



  return (
    <>
      <nav className="bg-gray-800 w-full rounded-lg border-b md:border-0 md:static">
        <div className="items-center px-1 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-2 md:py-5 md:block">
            <a href="javascript:void(0)">
              <Link to="/">
              <img
                src={Logo}
                width={80}
                
                alt="Weather logo"
              />
              </Link>
              
            </a>
          </div>
          <div className="ml-96 flex items-center">
            <Link to="/Weather">
              <a href="" className='text-xl text-gray-500 hover:text-indigo-600 flex items-center'>
                <FaSearchLocation className="mr-2" />
                Search City
              </a>
            </Link>
          </div>
        </div>
        <Outlet />
      </nav>
    </>
  );
}