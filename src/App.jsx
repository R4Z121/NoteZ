import React from "react";
import Home from "./pages/Home";
import Archived from "./pages/Archived";
import Detail from "./pages/Detail";
import NewNotes from "./pages/NewNotes";
import { Routes, Route } from "react-router-dom";

export default function App () {
  return (
    <div className="flex flex-col min-h-screen justify-between gap-7 bg-thick-white">
      <div className="flex flex-col relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archived" element={<Archived />} />
          <Route path="/detail/:noteId" element={<Detail />} />
          <Route path="/new" element={<NewNotes />} />
        </Routes>
      </div>
      <footer className="flex justify-center items-center p-2">
        <h4 className="text-base font-bold">Powered by R4Z121.</h4>
      </footer>
    </div>
  )
}