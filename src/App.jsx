import React, { createContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Archived from "./pages/Archived";
import Detail from "./pages/Detail";
import NewNotes from "./pages/NewNotes";
import NotFound from "./pages/NotFound";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { getUserLogged, putAccessToken } from "./utils/dataSource";
import PageHeader from "./components/header/PageHeader";

export const AppContext = createContext(null);

export default function App () {
  const [authedUser, setAuthedUser] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") === "dark" ?  "dark" : "light";
  });
  const [intializing, setInitializing] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function checkIfUserLoggedIn () {
      if(theme === "dark") {
        document.documentElement.setAttribute("class",theme);
      }
      const {data} = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }
    checkIfUserLoggedIn();
  },[])

  const contextValue = {
    theme
  }

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const {data} = await getUserLogged();
    setAuthedUser(data);
  }

  const toggleTheme = () => {
    const newTheme = (theme === "light") ? "dark" : "light";
    if(newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("app-theme", newTheme);
    setTheme(newTheme);
  }

  const logOut = () => {
    putAccessToken("");
    setAuthedUser(null);
    navigate("/login");
  }

  return intializing ? (<></>) : (
    <AppContext.Provider value={contextValue}>
      <div className="flex flex-col min-h-screen justify-between gap-7 bg-thick-white dark:bg-app-dark-purple transition-colors">
        <div className="flex flex-col relative">
          <PageHeader themeHandler={toggleTheme} logoutHandler={logOut} authedUser={authedUser}/>
          <Routes>
            <Route path="/login" element={authedUser ? (<Navigate to="/" />) : (<Login loginHandler={onLoginSuccess} />)} />
            <Route path="/register" element={authedUser ? (<Navigate to="/" />) : (<Register />)} />
            <Route path="/" element={authedUser ? (<Home />) : (<Navigate to="/login" />)} />
            <Route path="/archived" element={authedUser ? (<Archived />) : (<Navigate to="/login" />)} />
            <Route path="/detail/:noteId" element={authedUser ? (<Detail />) : (<Navigate to="/login" />)} />
            <Route path="/new" element={authedUser ? (<NewNotes />) : (<Navigate to="/login" />)} />
            <Route path="/:any" element={<NotFound />} />
          </Routes>
        </div>
        <footer className="flex justify-center items-center p-2">
          <h4 className="text-base font-bold dark:text-white">Powered by R4Z121.</h4>
        </footer>
      </div>
    </AppContext.Provider>
  )
}