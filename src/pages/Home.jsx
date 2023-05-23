import { useNavigate } from "react-router-dom";
import CreateNewDocs from "../components/CreateNewDocs";
import MyDocsLists from "../components/MyDocsLists";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <>
        <CreateNewDocs />
        <MyDocsLists />
      </>
    </div>
  );
}
