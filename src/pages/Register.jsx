import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import ButtonForm from "../components/modal/modal-form/ButtonForm";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../utils/dataSource";

export default function Register () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [passwordConfirmationInvalid, setPasswordConfirmationInvalid] = useState(false);
  const [registerFailedMessage, setRegisterFailedMessage] = useState("");
  
  const navigate = useNavigate();

  const onUsernameInput = e => {
    setUsername(e.target.value);
  }

  const onEmailInput = e => {
    setEmail(e.target.value);
    setEmailInvalid(false);
  }

  const onPasswordInput = e => {
    setPassword(e.target.value);
    setPasswordInvalid(false);
  }

  const onConfirmPasswordInput = e => {
    setConfirmPassword(e.target.value);
    setPasswordConfirmationInvalid(false);
  }

  //handle register
  const onRegister = async () => {
    if(validateInput(email,password, confirmPassword)) {
      const {error, message} = await register({name: username, email, password});
      if(!error) {
        navigate("/login");
      } else {
        setRegisterFailedMessage(message);
      }
    }
  }

  //validate email and password handler
  const validateInput = (email, password, confirmPassword) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      if (password.length >= 6) {
        if(password === confirmPassword) {
          return true;
        } else {
          setPasswordConfirmationInvalid(true);
          return false;
        }
      } else {
        setPasswordInvalid(true);
        return false;
      }
    }
    setEmailInvalid(true);
    return false;
  }

  return (
    <div className="p-3 w-full mt-10 flex justify-center items-center">
      <form className="w-full max-w-md flex flex-col gap-4 p-4 bg-app-blue dark:bg-app-black text-white rounded">
        <div id="form-header" className="w-full self-center relative -top-10 bg-blue-300 dark:bg-purple-950 p-3 flex justify-center items-center font-bold text-lg sm:text-2xl border-4 border-blue-700 dark:border-app-light-blue -mb-8">
          <h1 className="text-blue-700 dark:text-white">NoteZ</h1>
        </div>
        {registerFailedMessage ? (
          <div className="w-full flex justify-center p-2">
            <p className="text-red-600 font-bold">{registerFailedMessage} !</p>
          </div>
        ) : (<></>)}
        <div id="form-input" className="flex flex-col gap-5">
          <div id="username-input">
            <div className={`flex items-center gap-2 bg-white p-2 text-black rounded-sm text-sm sm:text-lg`}>
              <FaUser />
              <input type="text" id="username" className="p-1 w-full outline-none border-none bg-transparent" placeholder="Username" value={username} onChange={onUsernameInput} required />
            </div>
          </div>
          <div id="email-input">
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
            {passwordInvalid ? (<p className="text-red-600 font-bold">Password harus memiliki paling sedikit 6 karakter</p>) : (<></>)}
          </div>
          <div id="confirm-password-input">
            <div className={`flex items-center gap-2 bg-white p-2 text-black rounded-sm text-sm sm:text-lg ${passwordConfirmationInvalid ? "border-4 border-red-600" : ""}`}>
              <FaLock />
              <input type="password" id="confirm-password" className="p-1 w-full outline-none border-none bg-transparent" placeholder="Confirm password" value={confirmPassword} onChange={onConfirmPasswordInput} required />
            </div>
            {passwordConfirmationInvalid ? (<p className="text-red-600 font-bold">Konfirmasi password tidak cocok !</p>) : (<></>)}
          </div>
        </div>
        <ButtonForm content="Daftar" type="button" actionHandler={onRegister} customClass="w-full bg-blue-400 text-sm sm:text-lg hover:bg-blue-500 dark:bg-app-light-purple" />
        <div className="flex flex-col gap-3 text-center">
          <hr />
          <p>Sudah punya akun ?</p>
          <Link to="/login" className="p-2 text-white outline-0 border-none rounded hover:cursor-pointer w-full bg-blue-700 text-sm sm:text-lg hover:bg-blue-600">Masuk</Link>
        </div>
      </form>
    </div>
  )
}