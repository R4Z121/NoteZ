export default function BlockerModal({show}) {
  return (
    <div className={`fixed inset-x-0 inset-y-0 z-40 bg-black opacity-60 ${show ? '' : 'hidden'}`}></div>
  )
}