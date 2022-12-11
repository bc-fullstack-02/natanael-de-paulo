import React from 'react';
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api';

import { Form } from '../../components/Form';
import { WraperInput } from '../../components/Form/WraperInput';
import { Text } from '../../components/Text';
import { Input } from '../../components/Form/Input';
import { MdLockOutline, MdPersonOutline } from 'react-icons/md';

export function SignUp() {
  const navigate = useNavigate();
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
		<Form 
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
    </Form>
	);
}