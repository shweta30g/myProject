import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userContext = createContext();

const UsersContextProvider = (props) => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.github.com/users/shweta30g")
      .then((response) => {
        setLoading(true);
        setUserData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <userContext.Provider value={{ userData, loading }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UsersContextProvider;