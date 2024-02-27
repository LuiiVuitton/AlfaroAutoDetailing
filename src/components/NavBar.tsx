import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

interface NavProps {
  logoPath: string;
}

function NavBar({ logoPath }: NavProps) {
  return (
    <nav className="bg-navBarColor shadow-lg sticky top-0 z-10 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-navBarHamburger hover:bg-gray-700 hover:text-lightBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logoPath} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#Home"
                  className="text-black hover:bg-gray-700 hover:text-lightBlue flex items-center rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  <FaHome />
                  <span className="ml-2">Home</span>
                </a>
                <a
                  href="#About"
                  className="text-black hover:bg-gray-700 hover:text-lightBlue flex items-center rounded-md px-3 py-2 text-sm font-medium"
                >
                  <FaUser />
                  <span className="ml-2">About</span>
                </a>
                <a
                  href="#Services"
                  className="text-navBarText hover:bg-gray-700 hover:text-lightBlue flex items-center rounded-md px-3 py-2 text-sm font-medium"
                >
                  <FaTools />
                  <span className="ml-2">Services</span>
                </a>
                <a
                  href="#Contact"
                  className="text-navBarText hover:bg-gray-700 hover:text-lightBlue flex items-center rounded-md px-3 py-2 text-sm font-medium"
                >
                  <IoMdMail />
                  <span className="ml-2">Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
