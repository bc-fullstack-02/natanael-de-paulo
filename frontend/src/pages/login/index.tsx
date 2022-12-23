import React from 'react';
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api';
import jwtDecode from 'jwt-decode';


import { Text } from '../../components/Text';


import { MdLockOutline, MdPersonOutline } from 'react-icons/md';
import { AuthForm } from '../../components/AuthForm';
import { WraperInput } from '../../components/AuthForm/WraperInput';
import { Input } from '../../components/AuthForm/Input';

interface UserToken {
	sub: string;
	user: string;
	profile: string;
}

export function Login() {
	const navigate = useNavigate()

	const handleLogin = async (user: string, password: string) => {
		try {
			const { data } = await api.post('/security/login', {
				user,
				password
			})
	
			const decodedToken = jwtDecode(data.token) as UserToken
			localStorage.setItem("user_id", decodedToken.sub)
			localStorage.setItem("user", decodedToken.user)
			localStorage.setItem("token", data.token)
			localStorage.setItem("profile", decodedToken.profile)

			return navigate('/profile');
		} catch (error) {
			console.error(error);
			alert("Ocorreu um error ao logar.")
		}
	}

	return(
		<AuthForm formTitle='Faça login e começe a usar!' submitFormButtonText='Entrar' linkDescription={['Não possui conta?', 'Crie uma agora']} routeName='/signup' submitFormButtonAction={handleLogin} typeSubmit="login">
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