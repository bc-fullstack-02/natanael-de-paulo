import { Routes as Switch, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { ProfilePage } from './pages/ProfilePage';
import { FriendsPage } from './pages/FriendsPage';
import { useContextAuth } from './contexts/useAuth';

interface ProtectedRouteProps{
  redirectPath?:  string;
}

const ProtectedRoute = ({redirectPath = '/'}: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = useContextAuth()
  const location = useLocation();

  if(loading) {
    return <div>Carregando...</div>
  }

  if(isAuthenticated === false) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
};


export function Routes() {
  return(
    <>
      <Switch>
        <Route path='/' element={ <Login /> }></Route>
        <Route path='/signup' element={ <SignUp />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/profile' element={<ProfilePage/>}></Route>
          <Route path='/friends' element={<FriendsPage />}></Route>
        </Route>
        <Route path="/*" element={<>asdasd</>}></Route>
      </Switch>
    </>
  )
}
