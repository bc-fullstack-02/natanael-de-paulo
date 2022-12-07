import React, {useTransition} from 'react';

import { Form } from '../../components/Form';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';

import Logo from '../../assets/parrotLogo.svg';

export function Login() {

	

	return(
		<div className="text-cyan-50 px-6 mx-auto flex flex-col justify-center items-center gap-y-2 sm:max-w-2xl sm:w-full sm:flex-row sm:justify-between sm:gap-8">
			<header className="flex flex-col justify-center items-center text-center sm:flex-1">
				<img src={Logo} alt="Logo de papagaio do site sysmap Parrot" className='w-52 h-52 animate-rotate' />
				<Heading asChild={true} size="lg" className="font-bold mt-4">
					<h1>Sysmap Parrot</h1>
				</Heading>
				<Text size="lg" asChild={false} className="text-gray-400 mt-2">
          Faça login e começe a usar!
				</Text>
			</header>

			<div className='w-full flex-1'>
				<Form  className='w-full flex flex-col gap-4 sm:flex-1'/>
				<footer className='mt-2'>
					Não possui conta? Crie uma agora!
				</footer>
			</div>
		</div>  
	);
}