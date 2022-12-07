import React,{ ReactNode } from 'react';

interface WraperInputProps{
  children: ReactNode;
}

export function WraperInput ({ children  } : WraperInputProps){
	return (
		<div className="w-full flex items-center gap-3 px-3 h-12 rounded focus-within:ring-2 ring-cyan-300 bg-[#202024]">
			{ children }
		</div>
	);
}



