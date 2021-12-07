import { useState } from 'react'

import { publicAxios } from '../../store/utils/Axios';

import Page from '../Page';
import TextBox from '../UI/TextBox';
import Password from '../UI/Password';
import Content from '../UI/Content';
import { PrimaryButton } from '../UI/Button';

import { useSelector, useDispatch } from 'react-redux';
import { doSignIn } from '../../store/reducers/security/actions';

import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
const getSecurity = ({ security }) => security;
const SignIn = () => {

  const [txtCorreo, setTxtCorreo] = useState("");
  const [txtPassword, setTxtPassword] = useState("");

  const security = useSelector(getSecurity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onBtnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    doSignIn(dispatch, txtCorreo, txtPassword, navigate);

  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.name === "txtCorreo") {
      setTxtCorreo(e.target.value);
    } else {
      setTxtPassword(e.target.value);
    }
  }

  return (
    <Page title="Crear Cuenta" showHeader>
      <Content>
        <TextBox
          label="Correo Electrónico"
          value={txtCorreo}
          placeholder="Correo Electrónico Valido"
          onChange={onChangeHandler}
          name="txtCorreo"
        />
        <Password
          label="Contraseña"
          value={txtPassword}
          placeholder="Contraseña"
          onChange={onChangeHandler}
          name="txtPassword"
        />
        <div style={{ width: "100%", padding: '0.5em', marginTop: '1em' }}>
          <PrimaryButton onClick={onBtnClick}>Crear Cuenta</PrimaryButton>
        </div>
        <div style={{ width: "100%", padding: '0.5em', marginTop: '1em' }}>
          <Link to="/login">Ya tengo cuenta</Link>
        </div>
      </Content>
    </Page>
  );
}

export default SignIn
