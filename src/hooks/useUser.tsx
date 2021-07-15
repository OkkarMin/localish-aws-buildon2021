import { useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [authEvent, setAuthEvent] = useState("");

  Hub.listen("auth", (data) => setAuthEvent(data.payload.event));

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        setUser(await Auth.currentAuthenticatedUser());
      } catch (error) {
        setUser(null);
      }
    };

    getCurrentUser();
  }, [authEvent]);

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return { user, signOut };
};

export default useUser;
