export default function LabelInput ({label, type, id, customClass, value, changeHandler}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg" htmlFor={id}>{label}</label>
      {(type == "textarea") ? 
        (
          <textarea id={id} className="resize-none outline-0 border-none p-2 h-32 sm:h-48 rounded" value={value} onChange={changeHandler} required />
        ) 
        : 
        (
          <input id={id} className={`outline-0 p-1 rounded text-base ${customClass}`} value={value} onChange={changeHandler} required />
        )}
    </div>
  )
}