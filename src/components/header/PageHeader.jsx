import { Link } from "react-router-dom";
import { MdHome, MdArchive, MdLogout, MdSunny, MdModeNight, MdLogin, MdGTranslate } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { AppContext } from "../../App";
import { useContext } from "react";
import PropTypes from "prop-types";

export default function PageHeader({themeHandler, logoutHandler, authedUser, langHandler}) {
  const { theme, lang } = useContext(AppContext);

  return (
    <div className="w-full p-3 text-white bg-app-blue dark:bg-purple-950 flex justify-between gap-3 items-center" id="page-header">
      <div id="app-brand">
        <Link to='/' className="text-xl sm:text-2xl md:text-3xl font-bold">NoteZ</Link>
      </div>
      <nav id="header-nav" className="flex gap-3 items-center">
        {authedUser ? (
          <div className="flex flex-col gap-1 sm:gap-3">
            <p className="w-full text-right text-sm sm:text-lg">{lang === "id" ? `Halo, ${authedUser.name} !` : `Welcome, ${authedUser.name} !` }</p>
            <div className="flex items-center justify-end gap-2 sm:gap-4 text-xl sm:text-2xl">
              <Link to='/' title={lang === "id" ? "Halaman Utama" : "Home"}><MdHome /></Link>
              <Link to='/archived' title="Arsip"><MdArchive /></Link>
              <a onClick={themeHandler} className="hover:cursor-pointer" title={lang === "id" ? "Ubah Tema" : "Toggle Theme"}>{theme === "dark" ? (<MdSunny />) : (<MdModeNight />)}</a>
              <a onClick={langHandler} className="hover:cursor-pointer" title={lang === "id" ? "Ubah Bahasa" : "Toggle Language"}><MdGTranslate /></a>
              <a onClick={logoutHandler} className="hover:cursor-pointer" title={lang === "id" ? "Keluar" : "Logout"} ><MdLogout /></a>
            </div>
          </div>
        )
        : 
        (
        <>
          <div className="flex items-center justify-end gap-3 text-xl">
            <Link to={"/login"} title={lang === "id" ? "Masuk" : "Login"}><MdLogin /></Link>
            <Link to={"/register"} title={lang === "id" ? "Daftar" : "Register"}><GiNotebook /></Link>
            <a onClick={themeHandler} className="hover:cursor-pointer" title={lang === "id" ? "Ubah Tema" : "Toggle Theme"}>{theme === "dark" ? (<MdSunny />) : (<MdModeNight />)}</a>
            <a onClick={langHandler} className="hover:cursor-pointer" title={lang === "id" ? "Ubah Bahasa" : "Toggle Language"}><MdGTranslate /></a>
          </div>
        </>
        )}
      </nav>
    </div>
  )
}

PageHeader.propTypes = {
  themeHandler: PropTypes.func.isRequired,
  logoutHandler: PropTypes.func.isRequired,
  authedUser: PropTypes.objectOf(PropTypes.string),
  langHandler : PropTypes.func.isRequired
}