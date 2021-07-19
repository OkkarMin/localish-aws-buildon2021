import React, { useState, createContext, useEffect } from "react";

export const FriendMatchesContext = createContext();

export const FriendMatchesProvider = (props) => {
  const [matchList, setMatchList] = useState([]);

  //   useEffect(() => {
  //     setItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem("cartItems", JSON.stringify(items));
  //   }, [items]);

  return (
    <FriendMatchesContext.Provider value={[matchList, setMatchList]}>
      {props.children}
    </FriendMatchesContext.Provider>
  );
};
