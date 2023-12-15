import { useContext, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import PropTypes from "prop-types";
import { AppContext } from "../App";
import { login } from "../utils/dataSource";
import { loginLang } from "../utils/content";
import AppForm from "../components/body/AppForm";
import InputForm from "../components/body/InputForm";
import LoadingModal from "../components/modal/LoadingModal";

export default function Login ({ loginHandler }) {
  const { lang } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [loginFailedMessage, setLoginFailedMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
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
    if (validateInput(email, password)) {
      setLoading(true);
      const { error, data } = await login({ email, password });
      if (!error) {
        loginHandler(data);
        setLoginFailedMessage("");
      } else {
        if (data.toLowerCase().includes("email")) {
          setLoginFailedMessage("emailWrong");
        } else if (data.toLowerCase().includes("password")){
          setLoginFailedMessage("passwordWrong");
        } else {
          setLoginFailedMessage(data);
        }
      }
    }
  }

  //validate email and password handler
  const validateInput = (email, password) => {
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
    <div className="p-3 w-full mt-10 flex justify-center items-center">
      <AppForm 
        buttonAction={ onLogin }
        buttonContent={ loginLang[lang].buttonContent } 
        confirmationText={ loginLang[lang].confirmationText }
        failedActionMessage={ loginLang[lang][loginFailedMessage] || loginFailedMessage }
        linkContent={ loginLang[lang].linkContent }
        linkURL="/register"
      >
        <InputForm 
          inputHandler={ onEmailInput }
          inputLogo={<FaEnvelope />}
          inputPlaceholder="Email"
          inputType="email"
          inputValue={ email }
          invalidMessage={ emailInvalid ? loginLang[lang].invalidEmailMessage : "" }
        />
        <InputForm
          inputHandler={ onPasswordInput }
          inputLogo={ <FaLock /> }
          inputPlaceholder="Password"
          inputType="password"
          inputValue={ password }
          invalidMessage={ passwordInvalid ? loginLang[lang].invalidPasswordMessage : "" } 
        />
      </AppForm>
      <LoadingModal show={ loading } />
    </div>
  )
}

Login.propTypes = {
  loginHandler: PropTypes.func.isRequired
}