import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/SignInWithGoogle";
import Header from "../components/Header";
import TextEditor from "../components/TextEditor";

export const ROOT = "/";
export const LOGIN = "/login";
export const HOME = "/home";
export const DOC = "/document";

export const router = createBrowserRouter([
  { path: LOGIN, element: <Login /> },
  {
    path: DOC,
    element: <TextEditor />,
  },
  {
    path: ROOT,
    element: <Header />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
    ],
  },
]);
