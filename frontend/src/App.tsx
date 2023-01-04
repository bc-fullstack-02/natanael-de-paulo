import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/useAuth';
import { Routes } from './router';

export function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes/>
			</AuthProvider>
		</BrowserRouter>
	);
}
