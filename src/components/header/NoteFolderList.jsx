import { Link } from "react-router-dom";

export default function NoteFolderList ({folderName, folderActive, target}) {
  return (
    <div className="hover:cursor-pointer pb-0 flex flex-col">
      <Link to={`${target}`} className="border-b-2 border-app-gray-2 p-3 text-base sm:text-xl hover:bg-app-gray">
        <span className={`${folderActive ? 'text-app-blue' : 'text-black'}`}>{folderName}</span>
      </Link>
    </div>
  )
}