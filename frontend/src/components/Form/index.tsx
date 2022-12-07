import React from 'react';
import { Text } from '../Text';
import { WraperInput } from './WraperInput';
import { Input } from './Input';

import { MdLockOutline, MdPersonOutline } from 'react-icons/md';
import { Button } from '../Button';

interface FormProps{
	className?: string;
}

export function Form({className} : FormProps){
	return(
		<>
			<form action="" className={className}>
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
				<Button type='submit'>
					Entrar
				</Button>
			</form>
		</>
	);
}