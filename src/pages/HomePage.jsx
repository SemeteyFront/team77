import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<>
			<Link to='homepage'>
				<h1>HomePage</h1>
			</Link>
			<Link to='/register'>Зарегистрироваться</Link>
			<br />
			<Link to='/login'>Войти</Link>
		</>
	)
}

export default HomePage;