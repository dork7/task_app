import React, { useState, useContext } from "react";

const UserDataContext = React.createContext(null);
const FunctionContext = React.createContext(null);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState("");

  const contextFunction = () => {
    console.log(`test`);
  };

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      <FunctionContext.Provider value={contextFunction}>
        {children}
      </FunctionContext.Provider>
    </UserDataContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserDataContext);
};

export const useContextFunc = () => {
  return useContext(FunctionContext);
};
