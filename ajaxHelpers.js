const PLAYERS_API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-ghp-et-web-ft-sf/players";

export const fetchAllPlayers = async ()  =>{
  try {
    // write a fetch request for:
    // https://fsa-puppy-bowl.herokuapp.com/api/players
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-ghp-et-web-ft-sf/players")
    const result = await response.json();
      
    return result.data.players
    
    } catch (error) {
   console.error(error)
    }
  
    // update PlayerList with the results
};

export const deletePlayer = async (id) => {
  try {
    const response = await fetch(`${PLAYERS_API_URL}/${id}`, {
      method: "DELETE",
    });
    
  } catch (error) {
    console.error(error);
  }
};