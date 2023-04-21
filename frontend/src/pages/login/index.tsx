import { Navigate } from 'react-router-dom'
import { useContextAuth } from '../../contexts/useAuth';
import { AuthForm } from '../../components/AuthForm';
import { WraperInput } from '../../components/AuthForm/WraperInput';
import { MdLockOutline, MdPersonOutline } from 'react-icons/md';
import { Text } from '../../components/Text';
import { Input } from '../../components/AuthForm/Input';

export function Login() {
	const { singIn, isAuthenticated } = useContextAuth()
	
	if(isAuthenticated == true) {
    return <Navigate to='/home' replace />
	}
	console.log(singIn);
	

	return(
		<AuthForm formTitle='Faça login e começe a usar!' submitFormButtonText='Entrar' linkDescription={['Não possui conta?', 'Crie uma agora']} routeName='/signup' submitFormButtonAction={singIn} typeSubmit="login">
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