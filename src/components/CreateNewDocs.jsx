import { IconButton } from "@material-tailwind/react";
// import Header from "./components/Header";
import { MdMoreVert } from "react-icons/md";
// import Login from "./pages/SignInWithGoogle";
import { auth, db } from "../lib/firebase";
import { Firestore } from "firebase/firestore";
// import { auth } from "./lib/firebase";
import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { doc, setDoc } from "firebase/firestore";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { getLocalStorage } from "../hooks/useLocalStorage";

export default function CreateNewDocs() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const userDetails = getLocalStorage("loggedUser");

  const handleOpen = () => setOpen(!open);
  console.log(auth?.currentUser?.uid);

  const createDocument = async () => {
    if (!input) return;
    await setDoc(doc(db, "userDocs", auth?.currentUser?.email), {
      fileName: input,
      date: Date.now(),
    });
    localStorage.setItem(
      "document",
      JSON.stringify({ fileName: input, date: Date.now() })
    );
    setInput("");
    handleOpen();
  };

  const modal = (
    <Dialog open={open} handler={handleOpen} size="sm">
      {/* <DialogHeader>Its a simple dialog.</DialogHeader> */}
      <DialogBody>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="outline-none w-full"
          placeholder="Enter Name of Document..."
          onKeyDown={(e) => e.key === "Enter" && createDocument()}
        />
      </DialogBody>
      <DialogFooter className="flex items-center justify-evenly">
        <Button
          variant="outlined"
          color="blue"
          ripple={true}
          onClick={handleOpen}
          // className="mr-2"
        >
          <span>Cancel</span>
        </Button>
        <Button
          variant="gradient"
          ripple={true}
          color="blue"
          onClick={createDocument}
        >
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );

  return (
    <>
      {modal}

      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
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
              <MdMoreVert color="#5f6368" size={28} />
            </IconButton>
          </div>
          <div>
            <div className="relative h52 w-40 border-2 cursor-pointer hover:border-blue-700">
              <img
                src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
                alt=""
                onClick={handleOpen}
              />
            </div>

            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
              Blank
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
