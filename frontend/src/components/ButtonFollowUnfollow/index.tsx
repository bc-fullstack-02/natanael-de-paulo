import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { Button } from '../Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean;
	className?: string
	handleFollow: (profile_id: string) => Promise<void>
	profile_id: string;
}
export function ButtonFollowUnfollow({className, handleFollow, profile_id}: ButtonProps){
	
	return (
		<Button onClick={() => handleFollow(profile_id)}> 
			Deixar de seguir
		</Button>
	);
}