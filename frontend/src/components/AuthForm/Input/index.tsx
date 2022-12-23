import React,{ InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export function Input(props : InputProps) {
	return (
		<input 
		className="w-full bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400 shadow appearance-none focus:outline-none focus:shadow-outline  autofill:bg-transparent"
			 type="text" {...props}/>
	);
}

