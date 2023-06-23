import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Section/Home';
import Login from './components/Section/Login';
import Register from './components/Section/Register';
import Footer from './components/Footer';
import Contact from './components/Section/Contact';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
