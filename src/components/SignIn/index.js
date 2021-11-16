import Page from '../Page';
const SignIn = ()=>{
  return (
    <Page showHeader={true} title="Crear Cuenta" showNavBar >
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
          <button>Crear Cuenta</button>
        </div>
      </section>
    </Page>
  );
}

export default SignIn;
