import { Routes as Switch, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { ProfilePage } from './pages/ProfilePage';
import { FriendsPage } from './pages/FriendsPage';


export function Routes() {
  return(
    <>
      <Switch>
        <Route path='/' element={ <Login />}></Route>
        <Route path='/signup' element={ <SignUp />}></Route>
        <Route path='/home' element={ <Home />}></Route>
        <Route path='/profile' element={ <ProfilePage />}></Route>
        <Route path='/friends' element={ <FriendsPage />}></Route>
        <Route path="*" element=''></Route>
      </Switch>
    </>
  )
}