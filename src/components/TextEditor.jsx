import React, { useState } from "react";
import { getLocalStorage } from "../hooks/useLocalStorage";
import Login from "../pages/SignInWithGoogle";
import { MdDescription, MdPeople } from "react-icons/md";
import { HOME } from "../lib/routes";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
  const navigate = useNavigate();
  const userDetails = getLocalStorage("loggedUser");
  const docDetails = getLocalStorage("document");
  // console.log(docDetails);
  if (userDetails == null) return <Login />;
  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span onClick={() => navigate(HOME)} className="cursor-pointer">
          <MdDescription color="#4285f4" size={28} />
        </span>

        <div className="flex-grow px-2">
          <h2>{docDetails?.fileName}</h2>
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
            <p className="option">Extensions</p>
            <p className="option">Help</p>
          </div>
        </div>

        <Button
          color="light-blue"
          variant="filled"
          size="md"
          className="hidden md:!inline-flex h-10"
        >
          <MdPeople size={16} className="mr-1" /> SHARE
        </Button>
        <img
          className="cursor-pointer rounded-full h-10 w-10 ml-2"
          src={userDetails?.photoURL}
          alt={userDetails?.displayName}
        />
      </header>

      <div className="bg-[#F8F9FA] min-h-screen pb-16">
        <Editor
          toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
          editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border "
        />
      </div>
    </div>
  );
};

export default TextEditor;
