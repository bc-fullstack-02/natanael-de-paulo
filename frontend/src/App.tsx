import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './router';

export function App() {
	return (
		<BrowserRouter>
			<Routes/>
		</BrowserRouter>
	);
}
