import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ModulesPage from './pages/ModulesPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './ProfilePage';

const MainRoutes = () => {
	return (
		<>
			<Routes>
				<Route to='/' element={<HomePage/>}/>
				<Route path='/register' element={<RegisterPage/>}/>
				<Route path='/login' element={<LoginPage/>}/>
				<Route path='/modules' element={<ModulesPage/>}/>
				<Route path='/profile' element={<ProfilePage/>}/>
				<Route path='/courses' element={<Courses/>}/>
			</Routes>
		</>
	)
}

export default MainRoutes;