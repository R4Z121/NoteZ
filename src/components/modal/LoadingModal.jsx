import { bool } from "prop-types";
import { useContext } from "react";
import { AppContext } from "../../App";
import BlockerModal from "./BlockerModal";

export default function LoadingModal ({ show }) {
  const { lang } = useContext(AppContext);

  return (
    <>
      <BlockerModal show={ show } />
      <div className={ `fixed inset-x-0 inset-y-0 z-50 flex justify-center items-center ${ show ? '' : 'hidden' }` }>
        <p className="text-2xl text-white">{ lang === "id" ? "Memuat..." : "Loading..." }</p>
      </div>
    </>
  )
}

LoadingModal.propTypes = {
  show: bool.isRequired
}