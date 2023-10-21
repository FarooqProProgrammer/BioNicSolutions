import { createContext, useState } from "react";

export const NavContext = createContext();


export const NavProvider = ({children}) => {
    const [isNavOpen,setIsNavOpen] = useState(false);

    const NavEnabled = () => {
        setIsNavOpen(true)
    }

    const NavDisabled = () => {
        setIsNavOpen(false)
    }

    return (
        <NavContext.Provider value={{NavEnabled,NavDisabled,isNavOpen}}>
            {children}
        </NavContext.Provider>
    )
}