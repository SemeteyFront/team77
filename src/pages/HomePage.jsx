import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate()
	const tokens = JSON.parse(localStorage.getItem('tokens'))
	console.log(tokens)
	if(!tokens) {
		navigate('/login')
	}

	// const logout = () => {
	// 	localStorage.removeItem('tokens')
	// }
	
	return (
		<>
			<Link to='/'>
				<h1>HomePage</h1>
			</Link>
			<Link to='/register'>Зарегистрироваться</Link>
			<br />
			<Link to='/login'>Войти</Link>
		</>
	)
}

export default HomePage;