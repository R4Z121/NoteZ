import { useContext } from "react";
import { AppContext } from "../App";

export default function NotFound () {
  const { lang } = useContext(AppContext);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 items-center p-5 mt-16 dark:text-white">
        <p className="text-3xl sm:text-5xl">404</p>
        <p className="text-xl sm:text-2xl">{ lang === "id" ? "Halaman Tidak Tersedia" : "Page Not Found" }</p>
      </div>
    </div>
  )
}