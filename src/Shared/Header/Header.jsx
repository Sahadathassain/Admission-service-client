import { useContext,  useState } from "react";
import { Link, NavLink } from "react-router-dom";



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut, } = useContext;
  

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  
  return (
    <header className={`bg-[#76BA99]  text-black sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 `}>
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="inline-flex items-center">
          <img className="rounded-tl-3xl h-10 mr-2" src="https://png.pngtree.com/png-clipart/20220720/original/pngtree-school-admission-open-enroll-now-banner-png-png-image_8388342.png" alt="" />
          <Link to="/" className="text-white text-2xl font-bold">
            Admission <span className="text-black ">Service</span>
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-blackfocus:outline-none focus:text-white"
            aria-label="toggle menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <nav
        className={`${isMenuOpen ? "block" : "hidden"
          } sm:block sm:'flex' sm:items-center sm:w-auto`}
      >
        <div className="px-2 pt-2 pb-4  sm:flex sm:ml-13">
          <NavLink
            to="/"
            exact={true.toString()}
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
            activeClassName="bg-gray-700"
          >
            Home
          </NavLink>
          <NavLink
            to="/Colleges"
            exact={true.toString()}
            className="block px-2 py-1 text-white  font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
            activeClassName="bg-gray-700"
          >
            Colleges
          </NavLink>

          <NavLink
            to="/Admission"
            exact={true.toString()}
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-500 sm:mt-0 sm:ml-2"
            activeClassName="bg-gray-700"
          >
            Admission
          </NavLink>


          <NavLink
            to="/MyCollege "
            exact={true.toString()}
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
            activeClassName="bg-gray-700"
          >
           My College
          </NavLink>


          {user && user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="h-8 w-8 rounded-full ml-2"
              title={user.displayName || ""}
            />
          ) : null}
          {user ? (
            <button
              onClick={handleLogOut}
              className="block px-2 py-1 text-white  font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              exact={true.toString()}
              className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
              activeClassName="bg-gray-700"
            >
              Login
            </NavLink>


          )}


         
        </div>
      </nav>
    </header>
  );
}

export default Header;
