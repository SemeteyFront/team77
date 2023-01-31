import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ModulesPage from './pages/ModulesPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from '../src/pages/ProfilePage';
import TestPage from './pages/TestPage';
import DashboardPage from './pages/DashboardPage';

const MainRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage/>}/>
				<Route path='/register' element={<RegisterPage/>}/>
				<Route path='/login' element={<LoginPage/>}/>
				<Route path='/dashboard' element={<DashboardPage/>}/>
				<Route path='/modules' element={<ModulesPage/>}/>
				<Route path='/profile' element={<ProfilePage/>}/>
				<Route path='/test' element={<TestPage/>}/>
				<Route path='/courses' element={<Courses/>}/>
			</Routes>
		</>
	)
}

export default MainRoutes;