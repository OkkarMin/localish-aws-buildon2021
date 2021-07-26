import { useState } from "react";

import useUser from "../hooks/useUser";
import { DataStore } from "@aws-amplify/datastore";
import { AccessControl } from "../models";

const userControlLevel = () => {
  const { user } = useUser();
  const [controlLevel, setUserControlLevel] = useState("public");

  async function fetchUserControlLevel() {
    const accessControlList = await DataStore.query(AccessControl);

    accessControlList.map((personel, i) => {
      if (user.attributes.phone_number == personel.phoneNumber) {
        setUserControlLevel(personel.accessLevel);
      }
    });
  }

  if (user != null) {
    fetchUserControlLevel();
  }

  return { controlLevel };
};

export default userControlLevel;
