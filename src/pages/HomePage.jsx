import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate()
	const tokens = JSON.parse(localStorage.getItem('tokens'))
	// const email = localStorage.getItem('email')
	// console.log(email)
	console.log(tokens)
	// if(!tokens) {
	// 	navigate('/login')
	// }

	// const logout = () => {
	// 	localStorage.removeItem('tokens')
	// }

	localStorage.removeItem('iconify-version')
	
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