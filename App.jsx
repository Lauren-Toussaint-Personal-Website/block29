import { react, useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import {AllPlayers} from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  const [error, setError] = useState(null);
  const [players, playerList] = useState([
     
    { id: 1, name: "" },
    { id: 2, name: "" },
    { id: 3, name: "" },
  ]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/all-players" element={<AllPlayers/>} />
        <Route path="/new-player-form" element={<NewPlayerForm/>} />
        <Route path="/" element={<SinglePlayer/>} />
         
      </Routes>
    </>
  );
}

export default App
