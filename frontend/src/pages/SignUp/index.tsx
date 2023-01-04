import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { api } from '../../services/api';

import { MdLockOutline, MdPersonOutline } from 'react-icons/md';
import { AuthForm } from '../../components/AuthForm';
import { WraperInput } from '../../components/AuthForm/WraperInput';
import { Input } from '../../components/AuthForm/Input';
import { Text } from '../../components/Text';
import { useContextAuth } from '../../contexts/useAuth';

export function SignUp() {
  const { isAuthenticated } = useContextAuth()
  const navigate = useNavigate()

  
	if(isAuthenticated == true) {
    return <Navigate to='/home' replace />
	}

  const handleRegisterUser = async (name: string, user: string, password: string) => {
    try {
      await api.post('/security/register', {
        name,
        user,
        password
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
      <label htmlFor="name" className='space-y-1'>
        <Text asChild={false} size="lg"> Nome </Text>
        <WraperInput>
          <MdPersonOutline size={24} className="text-gray-400"/>
          <Input type="text" placeholder="Digite seu usuario" id='name'/>
        </WraperInput>
      </label>
      <label htmlFor="user" className='space-y-1'>
        <Text asChild={false} size="lg"> Login </Text>
        <WraperInput>
          <MdPersonOutline size={24} className="text-gray-400"/>
          <Input type="text" placeholder="Digite seu usuario" id='user'/>
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