import React from "react";
import { useContext } from "react";
import Router from "./router";
import Layout from "./components/Layout";
import { ThemeContext } from "./theme/ThemeContext";
import ThemeButton from "./components/ThemeButton";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.mode.darkMode;
  return (
    <div className={`page-layout ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Layout>
        <Router />
      </Layout>
      <ThemeButton />
    </div>
  );
}

export default App;
