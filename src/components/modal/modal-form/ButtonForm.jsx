export default function ButtonForm ({type, actionHandler, content, customClass}) {
  return (
    <button className={`p-3 text-white outline-0 border-none rounded hover:cursor-pointer ${customClass}`} type={type} onClick={actionHandler}>{content}</button>
  )
}