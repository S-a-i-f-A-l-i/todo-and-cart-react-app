import { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [appData, setAppData] = useState(
    JSON.parse(localStorage.getItem("AppData")) || {
      todo: {
        totalTodos: 0,
        completedTodos: 0,
        pendingTodos: 0,
        todos: [],
      },
      cart: {
        totalItems: 0,
        items: [],
      },
    }
  );
  // console.log(appData);
  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
