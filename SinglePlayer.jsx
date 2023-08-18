import { useParams } from "react-router-dom";

export default function SinglePlayer({ player }) {
  const [players, playerList] = useState([
    { id: 1, name: "" },
    { id: 2, name: "" },
    { id: 3, name: "" },
  ]);

  const { playerId } = useParams();

  const SinglePlayer = players.find((player) => {
    return player.id == playerId;
  });
  return (
    <div class="single-player-card">
      {SinglePlayer.name}: {playerId}
      <div class="flip-card-front">
        <div>
          <img class="player-img" src={player.imageUrl} />
        </div>
        <button class="details" onClick={() => handleClick(player.id)}>
          See Details
        </button>
        <button class="delete" onClick={() => deletePlayer(player.id)}>
          Delete player
        </button>
        <div>
          <img class="player-img" src={player.imageUrl} />
        </div>
        <div class="flip-card-back">
          <div>Player Name: {player.name}</div>
          <div>Player Breed: {player.breed}</div>
          <div>Player Status: {player.status}</div>
        </div>
        <div>
          <img class="player-img-back" src={player.imageUrl} />
        </div>
        <button class="flip" onClick={() => handleClick(player.id)}>
          Flip over
        </button>
      </div>
    </div>
  );
}
