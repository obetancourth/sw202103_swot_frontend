import { Link } from 'react-router-dom';
import Page from '../Page';
import TextBox from '../UI/TextBox';
import Password from '../UI/Password';
import Content from '../UI/Content';
import { PrimaryButton } from '../UI/Button';

const LoginContainer = (
  {
    txtCorreo,
    txtPassword,
    hasErrors,
    onChangeHandler,
    onBtnClick
  }
)=>{
  return (
    <Page showHeader title="Iniciar Sesión">
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
          <PrimaryButton onClick={onBtnClick}>Iniciar Sesión </PrimaryButton>
        </div>
        {
          (hasErrors && (
            <div style={{ width: "100%", padding: '0.5em', marginTop: '1em', color: '#F00' }}>
              No se pudo validar su Correo o Contraseña. Intente nuevamente.
            </div>
          ))
        }
        <div style={{ width: "100%", padding: '0.5em', marginTop: '1em' }}>
          <Link to="/signin">Crear una Cuenta</Link>
        </div>

      </Content>
    </Page>
  );
}

export default LoginContainer;
