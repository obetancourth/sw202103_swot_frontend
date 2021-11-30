import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const RequireAuth = ({redirectTo, children}) => {
  const {isLogged} = useSelector(({security})=>security);
  return isLogged ? children: <Navigate to={redirectTo} />;
}

export default RequireAuth;
