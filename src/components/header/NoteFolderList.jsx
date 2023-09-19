export default function NoteFolderList ({folderName, target, folderActive, changeTitleHandler, onFolderChange, changeNoteBodyHandler}) {
  return (
    <div className="hover:cursor-pointer hover:bg-app-gray p-3 pb-0" onClick={() => {
      changeTitleHandler(folderName);
      onFolderChange();
      changeNoteBodyHandler(target);
    }}>
      <p className="border-b-2 border-app-gray-2 pb-3 text-base sm:text-xl">
        <span className={`${folderActive ? 'text-app-blue' : 'text-black'}`}>{folderName}</span>
      </p>
    </div>
  )
}