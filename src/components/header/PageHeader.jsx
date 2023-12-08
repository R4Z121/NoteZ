import { Link } from "react-router-dom";
import { FaHome} from "react-icons/fa";

export default function PageHeader() {
  return (
    <div className="w-full p-3 text-white bg-app-blue flex gap-3 items-center text-3xl sm:text-4xl" id="page-header">
      <Link to='/' title="kembali"><FaHome  /></Link>
    </div>
  )
}