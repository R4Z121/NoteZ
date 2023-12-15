import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { register } from "../utils/dataSource";
import {AppContext} from "../App";
import LoadingModal from "../components/modal/LoadingModal";
import { registerLang } from "../utils/content";
import AppForm from "../components/body/AppForm";
import InputForm from "../components/body/InputForm";

export default function Register () {
  const {lang} = useContext(AppContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [passwordConfirmationInvalid, setPasswordConfirmationInvalid] = useState(false);
  const [registerFailedMessage, setRegisterFailedMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
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
      setLoading(true);
      const {error, message} = await register({name: username, email, password});
      setLoading(false);
      if(!error) {
        navigate("/login");
      } else {
        if(message.toLowerCase().includes("email")) {
          setRegisterFailedMessage("emailUsed");
        } else {
          setRegisterFailedMessage(message);
        }
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
      <AppForm 
        buttonAction={onRegister}
        buttonContent={registerLang[lang].buttonContent} 
        confirmationText={registerLang[lang].confirmationText}
        failedActionMessage={registerLang[lang][registerFailedMessage] || registerFailedMessage}
        linkContent={registerLang[lang].linkContent}
        linkURL="/login"
      >
        <InputForm 
          inputHandler={onUsernameInput}
          inputLogo={<FaUser />}
          inputPlaceholder={registerLang[lang].usernamePlaceholder}
          inputType="text"
          inputValue={username}
          invalidMessage=""
        />
        <InputForm 
          inputHandler={onEmailInput}
          inputLogo={<FaEnvelope />}
          inputPlaceholder="Email"
          inputType="email"
          inputValue={email}
          invalidMessage={emailInvalid ? registerLang[lang].invalidEmailMessage : ""}
        />
        <InputForm
          inputHandler={onPasswordInput}
          inputLogo={<FaLock />}
          inputPlaceholder="Password"
          inputType="password"
          inputValue={password}
          invalidMessage={passwordInvalid ? registerLang[lang].invalidPasswordMessage : ""} 
        />
        <InputForm
          inputHandler={onConfirmPasswordInput}
          inputLogo={<FaLock />}
          inputPlaceholder={registerLang[lang].passwordConfirmPlaceHolder}
          inputType="password"
          inputValue={confirmPassword}
          invalidMessage={passwordConfirmationInvalid ? registerLang[lang].invalidConfirmPasswordMessage : ""} 
        />
      </AppForm>
      <LoadingModal show={loading} />
    </div>
  )
}