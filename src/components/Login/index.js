import { useState } from 'react'

import Page from '../Page';
import TextBox from '../UI/TextBox';
import Password from '../UI/Password';

import { useSelector, useDispatch} from 'react-redux';

const getSecurity = ({security})=>security;
const Login = ()=>{
  /*
    Ciclo de Vida de un Componente de React
    ---------------------------------------
    virtualDOM -- copia del DOM
    DOM
    ---------------------------------------
    componentWillMount
    componentDidMount
    render
    componentWillUpdate
    componentDidUpdate
    componentWillUnmount
    componentDidUnmount
    ---------------------------------------

  */
  const [txtCorreo, setTxtCorreo] = useState("");
  const [txtPassword, setTxtPassword] = useState("");

  const security = useSelector(getSecurity);
  const dispatch = useDispatch();
  console.log(security);

  const onBtnClick =  (e)=> {
    e.preventDefault();
    e.stopPropagation();
    console.log("click");
    dispatch(
      {
        type:"SEC_NEW_ATTEMPT",
        payload: null,
      }
    );
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

  return (
    <Page showHeader={true} title="Iniciar Sesión" showNavBar>
      <section>
        <TextBox
          label="Correo Electrónico"
          value={txtCorreo}
          placeholder="Correo Electrónico Valido"
          onChange={onChangeHandler}
          name="txtCorreo"
          onBlur={(e)=>{
            alert("salio de foco");
          }}
         />
        <Password
          label="Contraseña"
          value={txtPassword}
          placeholder="Contraseña"
          onChange={onChangeHandler}
          name="txtPassword"
        />
        <div>
          <button onClick={onBtnClick}>Iniciar Sesión </button>
          {JSON.stringify(security)}
        </div>
      </section>
    </Page>
  );
}

export default Login;
