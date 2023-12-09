import PageHeader from "../components/header/PageHeader";

export default function NotFound () {
  return (
    <div className="flex flex-col">
      <PageHeader />
      <div className="flex flex-col gap-4 items-center p-5 mt-16">
        <p className="text-3xl sm:text-5xl">404</p>
        <p className="text-xl sm:text-2xl">Halaman Tidak Tersedia</p>
      </div>
    </div>
  )
}