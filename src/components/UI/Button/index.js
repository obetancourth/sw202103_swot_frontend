import './index.css';

export const Button = ({onClick, children, ...rest})=>{
  return (
    <button
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export const PrimaryButton = ({children, ...rest }) =>{
  return (
    <Button
      {...rest}
      className="btn primary"
    >
      {children}
    </Button>
  );
}

export const SecondaryButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      className="btn secondary"
    >
      {children}
    </Button>
  );
}
