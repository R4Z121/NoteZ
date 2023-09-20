const getInitialData = () => ([
  {
    id: `${(new Date()).getTime()}`,
    title: "Selamat Datang di NoteZ",
    body: "Ini adalah aplikasi memo sederhana untuk menyimpan catatan kamu. Aplikasi ini dibangun menggunakan library Javascript, React. Aplikasi ini merupakan hasil submission developer pada kelas Dicoding - Belajar Membuat Aplikasi Web Dengan React",
    createdAt: `${(new Date()).toISOString()}`,
    archived: false,
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
