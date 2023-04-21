import React,{ ReactNode, FormEvent } from 'react';
import { Link } from 'react-router-dom'
import { Text } from '../Text';

import { Button } from '../Button';
import { Heading } from '../Heading';
import Logo from '../../assets/parrotLogo.svg';
import { LoginUserProps, ProfileProps, UserProps } from '../../services/types';

interface FormProps{
	className?: string;
	formTitle: string;
	submitFormButtonText: string;
	submitFormButtonAction: (data:  Omit<UserProps, "_id"> | LoginUserProps) => Promise<void>
	linkDescription: string[];
	routeName: string;
	children?: ReactNode;
	typeSubmit: string;
}

interface FormElements extends HTMLFormControlsCollection{
	name: HTMLInputElement;
	user: HTMLInputElement;
	password: HTMLInputElement;
	email: HTMLInputElement;
}

interface FormElement extends HTMLFormElement{
	readonly elements: FormElements;
}


export function AuthForm( {className, formTitle, submitFormButtonText, linkDescription, routeName, submitFormButtonAction, children, typeSubmit} : FormProps){

	const handleSubmit = (event: FormEvent<FormElement>) => {
		event.preventDefault()
		const form = event.currentTarget
		console.log(form.elements);
		
		const { name, user, password, email } = form.elements
		
		if(typeSubmit == "login") {

			const loginData = {
				user: user.value,
				password: password.value
			} as LoginUserProps

			submitFormButtonAction(loginData)
		}
		if(typeSubmit == "cadastro") {

			const createUserData: Omit<UserProps, "_id"> = { 
				user: user.value, 
				password: password.value, 
				email: email.value,
				profile: {
					name: name.value,
				} as ProfileProps
			}
	
			submitFormButtonAction(createUserData)
		}
	}
	return(
		<>
			<section className="text-cyan-50 px-6 mx-auto flex flex-col justify-'center items-center gap-y-2 w-full max-w-screen-xl sm:flex-row sm:justify-between sm:gap-4">
				<header className="flex flex-col justify-center items-center text-center sm:flex-1">
					<img src={Logo} alt="Logo de papagaio do site sysmap Parrot" className='w-52 h-52 animate-rotate' />
					<Heading asChild={true} size="lg" className="font-bold mt-4">
						<h1>Sysmap Parrot</h1>
					</Heading>
					<Text size="lg" className="text-gray-400 mt-2">
						{ formTitle }
					</Text>
				</header>

				<div className='w-full sm:flex-1 flex flex-col items-center'>
					<form onSubmit={handleSubmit} className="max-w-sm w-full flex flex-col gap-4 sm:flex-1 animate-form">
						{ children }
						<Button type='submit'>
							{ submitFormButtonText }
						</Button>
					</form>
					<footer className='mt-2'>
						<Text size="sm" className='text-gray-400'>
							{ linkDescription[0] } <Link to={ routeName } className='underline'>{linkDescription.slice(1)}!</Link>
						</Text>
					</footer>
				</div>
			</section>  
		</>
	);
}