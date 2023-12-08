import { Link } from "react-router-dom";
import { FaHome, FaCheck } from "react-icons/fa";

export default function PageHeader({archiveStatus, archiveHandler, deleteHandler, saveHandler}) {
  return (
    <div className="w-full p-3 text-white bg-app-blue flex gap-3 items-center text-3xl" id="page-header">
      <Link to='/'><FaHome  /></Link>
      {/* <button><FaCheck /></button> */}
    </div>
  )
}