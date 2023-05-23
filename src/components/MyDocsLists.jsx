import { IconButton } from "@material-tailwind/react";
// import Header from "./components/Header";
import { MdMoreVert, MdFolder, MdArticle } from "react-icons/md";
// import Login from "./pages/SignInWithGoogle";

// import { auth } from "./lib/firebase";
import { useEffect, useState } from "react";
import { getLocalStorage } from "../hooks/useLocalStorage";
import { DOC } from "../lib/routes";
import { useNavigate } from "react-router-dom";

export default function MyDocsLists() {
  const navigate = useNavigate();
  const document = getLocalStorage("document");

  return (
    <section className="bg-white px-10 md:px-0">
      <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
        <div className="flex items-center justify-between pb-5">
          <h2 className="font-medium flex-grow">My Documents</h2>
          <p className="mr-12">Date Created</p>
          <MdFolder color="#5f6368" size={28} />
        </div>
        <div
          className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer"
          onClick={() => navigate(DOC)}
        >
          <MdArticle color="#5f6368" size={28} />
          <p className="flex-grow pl-5 w-10 pr-10 truncate">
            {document?.fileName}
          </p>
          <p className="pr-5 text-sm">{document?.date}</p>
        </div>
      </div>
    </section>
  );
}
