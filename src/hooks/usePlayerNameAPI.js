import { useEffect, useState } from "react";

export const usePlayerNameAPI = () => {
  const[playerName, setPlayerName] = useState();

  const getPlayerName = async () => {
    const url = "https://makersep3gamebackend.herokuapp.com/user-name";
    const res = await fetch(url, { method: "GET" , 
    credentials: 'include' });
    const json = await res.json();
    setPlayerName(json.username);
  }

  useEffect(()=>{
    getPlayerName()
  }, [])

  return[ playerName, getPlayerName ];
}
