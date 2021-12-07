import Page from '../Page';
import { useSelector } from 'react-redux';
import Content from '../UI/Content';
import { PrimaryButton } from '../UI/Button';
import { doLogOut } from '../../store/reducers/security/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
const getSecurity = ({security})=>security;
const Dashboard = ()=>{
  const {user } = useSelector(getSecurity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Page title="SWOT 1.0" showHeader showNavBar>
      <Content>
        { user.email}
        <br/>
        { user._id }
        <div style={{ width: "100%", padding: '0.5em', marginTop: '1em' }}>
          <PrimaryButton onClick={()=>{doLogOut(dispatch);navigate({to:"/login", replace:true})}}>Cerrar Sesión</PrimaryButton>
        </div>
      </Content>
    </Page>
  );
}

export default Dashboard;
