import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';


import { doLogin } from '../../store/reducers/security/actions';
import LoginContainer from './LoginContainer';

const getSecurity = ({security})=>security;
const Login = ()=>{

  const [txtCorreo, setTxtCorreo] = useState("");
  const [txtPassword, setTxtPassword] = useState("");

  const security = useSelector(getSecurity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onBtnClick =  (e)=> {
    e.preventDefault();
    e.stopPropagation();
    doLogin(dispatch, txtCorreo, txtPassword, navigate);
  };

  const onChangeHandler = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    if (e.target.name === "txtCorreo") {
      setTxtCorreo(e.target.value);
    } else {
      setTxtPassword(e.target.value);
    }
  }
  const { hasErrors } = security;

  const LoginParameters = {
    txtCorreo,
    txtPassword,
    hasErrors,
    onChangeHandler,
    onBtnClick
  }
  return (
    <LoginContainer {...LoginParameters} />
  );
}

export default Login;
