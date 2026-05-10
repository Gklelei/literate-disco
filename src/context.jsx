import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const user = {
    name: "Densi",
    role: "ADMIN",
  };
  const name = user.name;
  //   const [name, setName] = useState();
  const role = user.role;
  return (
    <ProfileContext.Provider value={{ name, role }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const UseProfileContext = () => {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      "Profile contect cannot be use outside the context provider",
    );
  }

  return context;
};
