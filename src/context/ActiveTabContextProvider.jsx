import { createContext, useState } from "react";

export const ActiveTabContext = createContext(null);

const ActiveTabContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("home");

  const activeTabContext = {
    activeTab: activeTab,
    setActiveTab: setActiveTab,
  };

  return (
    <ActiveTabContext.Provider value={activeTabContext}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export default ActiveTabContextProvider;
