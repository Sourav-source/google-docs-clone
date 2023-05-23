import { IconButton } from "@material-tailwind/react";
import { MdDescription, MdMenu, MdSearch, MdApps } from "react-icons/md";
import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { HOME, LOGIN } from "../lib/routes";
import { getLocalStorage } from "../hooks/useLocalStorage";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const userDetails = getLocalStorage("loggedUser");

  const logOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("loggedUser");

      navigate(LOGIN);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const userDetails = getLocalStorage("loggedUser");
    // console.log(userDetails.stsTokenManager.accessToken);
    if (userDetails == null) {
      navigate(LOGIN);
    } else if (userDetails != null && location?.pathname == "/") {
      navigate(HOME);
    }
  }, [navigate]);

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
        <IconButton
          style={{
            padding: "28px",
          }}
          // size="lg"
          color="gray"
          ripple={true}
          variant="text"
          className="rounded-full border-0"
        >
          <MdMenu color="#5f6368" size={28} />
        </IconButton>
        <MdDescription color="#4285f4" size={44} />
        <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>
        <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
          <MdSearch color="#5f6368" size={28} />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-5 text-base bg-transparent outline-none"
          />
        </div>
        <IconButton
          style={{
            padding: "28px",
          }}
          // size="lg"
          color="gray"
          ripple={true}
          variant="text"
          className="rounded-full border-0 md:inline-flex ml-5 md:ml-20"
        >
          <MdApps color="#5f6368" size={28} />
        </IconButton>
        <img
          loading="lazy"
          className="cursor-pointer h-12 w-12 rounded-full ml-2 object-cover"
          src={userDetails?.photoURL}
          alt={userDetails?.displayName}
          onClick={logOut}
        />
      </header>

      <Outlet />
    </>
  );
}

export default Header;
