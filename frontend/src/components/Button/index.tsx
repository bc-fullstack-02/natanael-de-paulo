import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	asChild?: boolean;
	className?: string
}

export function Button({ children, asChild, className, ...props} : ButtonProps){
	const Comp = asChild? Slot: 'button';

	return (
		<Comp className={clsx(
			'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus-within:right-2 ring-white ',
			className
		)} {...props} >
			{ children }
		</Comp>
	);
}