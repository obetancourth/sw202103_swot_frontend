import Page from '../Page';
const Login = ()=>{
  return (
    <Page showHeader={true} title="Iniciar Sesión" showNavBar>
      <section>
        <div>
        <label htmlFor="">Correo Electrónico</label>
        <input type="text" />
        </div>
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
