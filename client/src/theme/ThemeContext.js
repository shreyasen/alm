import React, { useReducer, createContext } from "react";

export const ThemeContext = createContext();

const initialState = {
    darkMode: false
}

const themeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHTMODE":
            return { darkMode: false }
        case "DARKMODE":
            return { darkMode: true }
        default:
            return state;
    }
}

export const ThemeProvider = (props) => {
    const [mode, dispatch] = useReducer(themeReducer, initialState);

    return <ThemeContext.Provider value={{ mode, dispatch }}>{props.children}</ThemeContext.Provider>;
}
