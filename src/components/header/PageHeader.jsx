import { Link } from "react-router-dom";
import { FaHome} from "react-icons/fa";
import { MdArchive } from "react-icons/md";

export default function PageHeader() {
  return (
    <div className="w-full p-3 text-white bg-app-blue flex gap-3 items-center text-3xl sm:text-4xl" id="page-header">
      <Link to='/' title="Halaman Utama"><FaHome  /></Link>
      <Link to='/archived' title="Arsip"><MdArchive /></Link>
    </div>
  )
}