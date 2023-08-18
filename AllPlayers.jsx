import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllPlayers, deletePlayer } from "../API/ajaxHelpers";
import ReactCardFlip from "react-card-flip";
import { useParams } from "react-router-dom";

export function AllPlayers() {
  const [players, playerList] = useState([]);
  const [error, setError] = useState(null);
  const [isFlipped, setFlipped] = useState({});

  useEffect(() => {
    fetchAllPlayers().then((result) => playerList(result));
  }, []);

  const handleClick = (id) =>
    setFlipped({ ...isFlipped, [id]: !isFlipped[id] });
  return (
    <div class="player-card-container">
      {players.map((player) => (
        <div class="player-card">
          <ReactCardFlip
            isFlipped={isFlipped[player.id]}
            flipDirection="horizontal"
          >
            <div class="flip-card-front">
              <div>{player.name}</div>
              <img class="player-img" src={player.imageUrl} />
              <button class="details" onClick={() => handleClick(player.id)}>
                See Details
              </button>
              <button class="delete" onClick={() => deletePlayer(player.id)}>
                Delete player
              </button>
            </div>
            <div class="flip-card-back">
              <div>Player Name: {player.name}</div>
              <div>Player Breed: {player.breed}</div>
              <div>Player Status: {player.status}</div>
              <img class="player-img-back" src={player.imageUrl} />
              <button class="flip" onClick={() => handleClick(player.id)}>
                Flip over
              </button>
              <button
                class="stash"
                onClick={() => <Route path="/" element={<SinglePlayer />} />}
              >
                Save Your Faves Here!
              </button>
            </div>
          </ReactCardFlip>
        </div>
      ))}
    </div>
  );
}
