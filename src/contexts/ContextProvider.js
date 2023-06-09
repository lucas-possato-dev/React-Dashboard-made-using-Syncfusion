import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setcurrentMode] = useState("Light");
  const [screenSize, setScreenSize] = useState(undefined);
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setcurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
    const storedThemeMode = localStorage.getItem("themeMode");
  };

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);
    const storedColorMode = localStorage.getItem("colorMode");

    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({
      ...initialState,
      [clicked]: true,
    });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
