import React, {useState, useEffect} from 'react'
// import { Collapse } from 'flowbite';
import { Link, useNavigate } from "react-router-dom"
import "./Header.css"
 


function Header({logOut, activeUser}) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();
    function handleClick () {
      localStorage.removeItem('jwt');
      logOut(null);
      navigate('/Login');
  }

  function handleDropdownClick() {
    setDropdownOpen(!isDropdownOpen);
  }



  return (
   

<nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div className="max-w-screen-xl header-container ">
    <Link to="/home" className="flex items-center">
        <img src="https://e7.pngegg.com/pngimages/7/273/png-clipart-running-man-illustration-physical-therapy-manual-therapy-clinic-health-color-border-logo-medicine.png" className="h-8 mr-3" alt="PTConnect Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PT Connect</span>
    </Link>
    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
        </li>
        <li>
            <button id="dropdownNavbarLink" onClick={handleDropdownClick}data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Account <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdown-Navbar" className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} font-normal bg-gray-200 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                  <Link to="/home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 hover:bg-gray-100 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Appointments</Link>
                  </li>
                  <li>
                  <Link to="/settings" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 hover:bg-gray-100 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Settings</Link>
                  </li>

                { activeUser.empty?  
                    <li>
                  <Link to="/home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent hover:bg-gray-100 md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page" onClick={handleClick}>login</Link>
                  </li>
                  : 
                  <li>
                  <Link to="/home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent hover:bg-gray-100 md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page" onClick={handleClick}>Logout</Link>
                  </li>
                }
                </ul>
            </div>
        </li>
        <li>
          <Link to="/providers" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Providers</Link>
        </li>
        <li>
          <Link to="/articles" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Articles</Link>
        </li>
        <li>
          <Link to="/exercises" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Exercises</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Header