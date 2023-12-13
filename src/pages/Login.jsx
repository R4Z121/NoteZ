import { FaEnvelope, FaLock } from "react-icons/fa";
import ButtonForm from "../components/modal/modal-form/ButtonForm";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { login } from "../utils/dataSource";
import { AppContext } from "../App";
import { putAccessToken } from "../utils/dataSource";

export default function Login () {

  const {setAuthedUser} = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [loginFailedMessage, setLoginFailedMessage] = useState("");
  
  const onEmailInput = e => {
    setEmail(e.target.value);
    setEmailInvalid(false);
  }

  const onPasswordInput = e => {
    setPassword(e.target.value);
    setPasswordInvalid(false);
  }

  //handle login
  const onLogin = async () => {
    if(validateInput(email,password)) {
      const {error,data} = await login({email,password});
      if(!error) {
        putAccessToken(data.accessToken);
        setAuthedUser(data);
        setLoginFailedMessage("");
      } else {
        setLoginFailedMessage(data);
      }
    }
  }

  //validate email and password handler
  const validateInput = (email,password) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      if (password.length >= 6) {
        return true;
      } else {
        setPasswordInvalid(true);
        return false;
      }
    }
    setEmailInvalid(true);
    return false;
  }

  return (
    <div className="p-3 w-full min-h-screen flex justify-center items-center">
      <form className="w-full max-w-md flex flex-col gap-4 p-4 bg-app-blue text-white rounded">
        <div id="form-header" className="w-full self-center relative -top-10 bg-blue-300 p-3 flex justify-center items-center font-bold text-lg sm:text-2xl border-4 border-blue-700 -mb-8">
          <h1 className="text-blue-700">NoteZ</h1>
        </div>
        {loginFailedMessage ? (
          <div className="w-full flex justify-center p-2">
            <p className="text-red-600 font-bold">{loginFailedMessage} !</p>
          </div>
        ) : (<></>)}
        <div id="form-input" className="flex flex-col gap-5">
          <div id="email-input" className="">
            <div className={`flex items-center gap-2 bg-white p-2 text-black rounded-sm text-sm sm:text-lg ${emailInvalid ? "border-4 border-red-600" : ""}`}>
              <FaEnvelope />
              <input type="email" id="email" className="p-1 w-full outline-none border-none bg-transparent" placeholder="Email" value={email} onChange={onEmailInput} required />
            </div>
            {emailInvalid ? (<p className="text-red-600 font-bold">Email tidak valid</p>) : (<></>)}
          </div>
          <div id="password-input">
            <div className={`flex items-center gap-2 bg-white p-2 text-black rounded-sm text-sm sm:text-lg ${passwordInvalid ? "border-4 border-red-600" : ""}`}>
              <FaLock />
              <input type="password" id="password" className="p-1 w-full outline-none border-none bg-transparent" placeholder="Password" value={password} onChange={onPasswordInput} required />
            </div>
            {passwordInvalid ? (<p className="text-red-600 font-bold">Password harus memiliki paling sedikit 6 karakter !</p>) : (<></>)}
          </div>
        </div>
        <ButtonForm content="Masuk" type="button" actionHandler={onLogin} customClass="w-full bg-blue-400 text-sm sm:text-lg hover:bg-blue-500" />
        <div className="flex flex-col gap-3 text-center">
          <hr />
          <p>Belum punya akun ?</p>
          <Link to="/register" className="p-2 text-white outline-0 border-none rounded hover:cursor-pointer w-full bg-blue-700 text-sm sm:text-lg hover:bg-blue-600">Daftar</Link>
        </div>
      </form>
    </div>
  )
}