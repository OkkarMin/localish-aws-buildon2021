import React, { useState, createContext, useEffect } from "react";

export const FriendMatchesContext = createContext();

export const FriendMatchesProvider = (props) => {
  const [matchList, setMatchList] = useState([]);

  return (
    <FriendMatchesContext.Provider value={[matchList, setMatchList]}>
      {props.children}
    </FriendMatchesContext.Provider>
  );
};
