import {bool} from "prop-types";
import BlockerModal from "./BlockerModal";

export default function LoadingModal ({show}) {
  return (
    <>
      <BlockerModal show={show} />
      <div className={`fixed inset-x-0 inset-y-0 z-50 flex justify-center items-center ${show ? '' : 'hidden'}`}>
        <p className="text-2xl dark:text-white">Memuat ....</p>
      </div>
    </>
  )
}

LoadingModal.propTypes = {
  show: bool.isRequired
}