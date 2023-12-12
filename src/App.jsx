import React, { createContext, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Archived from "./pages/Archived";
import Detail from "./pages/Detail";
import NewNotes from "./pages/NewNotes";
import NotFound from "./pages/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppContext = createContext(null);

export default function App () {
  const [authedUser, setAuthedUser] = useState(null);

  const contextValue = {
    authedUser,
    setAuthedUser
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="flex flex-col min-h-screen justify-between gap-7 bg-thick-white">
        <div className="flex flex-col relative">
          <Routes>
            <Route path="/login" element={authedUser ? (<Navigate to="/" />) : (<Login />)} />
            <Route path="/register" element={authedUser ? (<Navigate to="/" />) : (<Register />)} />
            <Route path="/" element={authedUser ? (<Home />) : (<Navigate to="/login" />)} />
            <Route path="/archived" element={authedUser ? (<Archived />) : (<Navigate to="/login" />)} />
            <Route path="/detail/:noteId" element={authedUser ? (<Detail />) : (<Navigate to="/login" />)} />
            <Route path="/new" element={authedUser ? (<NewNotes />) : (<Navigate to="/login" />)} />
            <Route path="/:any" element={<NotFound />} />
          </Routes>
        </div>
        <footer className="flex justify-center items-center p-2">
          <h4 className="text-base font-bold">Powered by R4Z121.</h4>
        </footer>
      </div>
    </AppContext.Provider>
  )
}