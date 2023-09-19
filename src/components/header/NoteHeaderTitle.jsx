export default function NoteHeaderTitle ({title, navHandler}) {
  return (
    <div id="NoteHeaderTitle" className="flex justify-center items-center p-3 justify-center bg-thick-white items-center w-full relative z-20">
      <h1 className="text-2xl sm:text-3xl">{title}</h1>
      <svg className="hover:cursor-pointer" onClick={navHandler} xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
    </div>
  )
}