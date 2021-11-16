import Page from '../Page';
import TextBox from '../UI/TextBox';
const Login = ()=>{
  return (
    <Page showHeader={true} title="Iniciar Sesión" showNavBar>
      <section>
        <div>
          <label htmlFor="">Correo Electrónico</label>
          <input type="text" />
        </div>
        <TextBox
          label="Correo Electrónico"
          value=""
          placeholder="Correo Electrónico Valido"
          onChange={(e)=>{e.preventDefault(); e.stopPropagation(); console.log(e.target.value);}}
         />
        <div>
          <label htmlFor="">Contraseña</label>
          <input type="password" />
        </div>
        <div>
          <button>Iniciar Sesión</button>
        </div>
      </section>
    </Page>
  );
}

export default Login;
