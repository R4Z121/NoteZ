import { Link } from "react-router-dom";

export default function AddButton({actionHandler}) {
  return (
    <Link to='/new' className="rounded-full flex justify-center items-center pb-1 sm:p-1 sm:pb-3 bg-app-yellow fixed bottom-6 right-3 z-30 w-16 h-16 sm:w-20 sm:h-20 outline-0 border-none hover:cursor-pointer text-3xl sm:text-5xl" onClick={actionHandler}>+</Link>
  )
}