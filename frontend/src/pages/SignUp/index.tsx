import { Navigate, useNavigate } from 'react-router-dom'
import { api } from '../../services/api';
import { MdLockOutline, MdPersonOutline } from 'react-icons/md';
import { AuthForm } from '../../components/AuthForm';
import { WraperInput } from '../../components/AuthForm/WraperInput';
import { Input } from '../../components/AuthForm/Input';
import { Text } from '../../components/Text';
import { useContextAuth } from '../../contexts/useAuth';
import { ProfileProps, UserProps } from '../../services/types';

export function SignUp() {
  const { isAuthenticated } = useContextAuth()
  const navigate = useNavigate()

  
	if(isAuthenticated == true) {
    return <Navigate to='/home' replace />
	}

  const handleRegisterUser = async (data : Omit<UserProps, "_id">) => {
    try {
      await api.post('/security/register', {
        user: data.user,
        password: data.password,
        email: data.email,
        profile: {
          name: data.profile.name
        }
      })
      navigate('/')
    } catch (error) {
      console.error(error);
      alert("Erro na criação de usuario")
    }
  }

	return(
		<AuthForm 
      formTitle='Faça o cadastro e começe a usar!' 
      submitFormButtonText='Cadastrar' 
      linkDescription={['Já possui conta?', 'Entre agora!']} 
      routeName='/' 
      submitFormButtonAction={handleRegisterUser}
      typeSubmit="cadastro"
    > 
      <label htmlFor="user" className='space-y-1'>
        <Text asChild={false} size="lg"> Login </Text>
        <WraperInput>
          <MdPersonOutline size={24} className="text-gray-400"/>
          <Input type="text" placeholder="Digite seu usuario" id='user'/>
        </WraperInput>
      </label>

      <label htmlFor="name" className='space-y-1'>
        <Text asChild={false} size="lg"> Nome </Text>
        <WraperInput>
          <MdLockOutline size={24} className="text-gray-400"/>
          <Input type="text" placeholder="Digite sua senha" id='name' />
        </WraperInput>
      </label>

      <label htmlFor="email" className='space-y-1'>
        <Text asChild={false} size="lg"> Email </Text>
        <WraperInput>
          <MdPersonOutline size={24} className="text-gray-400"/>
          <Input type="email" placeholder="Digite seu email" id='email'/>
        </WraperInput>
      </label>
      <label htmlFor="password" className='space-y-1'>
        <Text asChild={false} size="lg"> Senha </Text>
        <WraperInput>
          <MdLockOutline size={24} className="text-gray-400"/>
          <Input type="text" placeholder="Digite sua senha" id='password'/>
        </WraperInput>
      </label>
    </AuthForm>
	);
}