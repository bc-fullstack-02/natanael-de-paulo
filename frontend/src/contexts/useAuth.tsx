import jwtDecode from 'jwt-decode';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { json, useLocation, useNavigate } from 'react-router-dom'
import { api } from '../services/api';
import { AuthHeader } from '../services/authHeader';

interface AuthContextData  {
  singIn: (user: string, password: string) => Promise<void>;
  signOut:  () => void;
  isAuthenticated: boolean;
  loading: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

type Token = {
	sub: string;
	user: string;
	profile: string;
}

type userProps = {
  user_id: string, 
  user_name: string,
  profile_id: string,
  token: string
}

const AuthContext = createContext({} as AuthContextData);
export function AuthProvider({children} : AuthProviderProps ){
  const [ isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState({} || null);
  const navigate = useNavigate()

  useEffect(() => {
    const recoveredToken = localStorage.getItem("token");

    if(recoveredToken){
      setToken(recoveredToken);
      setIsAuthenticated(true)
    }
    setLoading(false);
  }, [])


  const singIn = async (user: string, password: string) => {
		try {
			const { data } = await api.post('/security/login', {
				user,
				password
			})

			const decodedToken = jwtDecode(data.token) as Token


      const userData = {
        user_id: decodedToken.sub, 
        user_name: decodedToken.user,
        profile_id: decodedToken.profile,
        token: data.token
      }
      
			localStorage.setItem("userData", JSON.stringify(userData))
      localStorage.setItem('token', userData.token)
     
      setIsAuthenticated(true)
      setToken(userData.token)
			navigate('/home');
		} catch (error) {
			console.error(error);
			alert("Ocorreu um error ao logar.")
		}
	}

  const signOut = () => {
    localStorage.clear();
    setIsAuthenticated(false)
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{singIn, signOut, isAuthenticated, loading}}>
      { children }
    </AuthContext.Provider>
  )
}


export function useContextAuth () {
  return useContext(AuthContext)
}