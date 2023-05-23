import { Button } from "@material-tailwind/react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../lib/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HOME } from "../lib/routes";
import { getLocalStorage } from "../hooks/useLocalStorage";

function Login() {
  const navigate = useNavigate();
  const googleSignIn = async (e) => {
    try {
      const provider = await new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      localStorage.setItem("loggedUser", JSON.stringify(currentUser));
      const userDetails = getLocalStorage("loggedUser");
      console.log(userDetails);
      if (userDetails && userDetails.stsTokenManager.accessToken) {
        navigate(HOME);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <img
        src="https://links.papareact.com/1ui"
        alt="Docs"
        className="h-[300px] w-[550px] object-contain"
      />
      <Button
        className="w-44 mt-10"
        color="blue"
        variant="filled"
        ripple="light"
        onClick={googleSignIn}
      >
        Login
      </Button>
    </div>
  );
}
export default Login;
