import { useEffect, useState, createContext } from "react";
const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const values = {
        isLoading,
        setIsLoading,
    };

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;