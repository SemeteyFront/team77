import React from 'react';
import logo from '../src/images/soloLogo.png';
import dashboard from '../src/images/dashboard.png';
import blackCourses from '../src/images/blackCourse.png';
import vocabulary from '../src/images/vocabulary.png';
import crown from '../src/images/crown.png';
import logout from '../src/images/logout.png';
import './sidebar.css';

const SideBar = () => {
	return (
		<>
			<div className='rightHome'>
				<div className='logo'>
					<img src={logo} alt="logo" />
					<p className='logoText'>SoloEng</p>
				</div>
				<nav>
					<ul className='lists'>
						<li className='list'>
							<img className='lists_img' src={dashboard} alt="Главная" />
							<p>Главная</p>
						</li>
						<li className='list'>
							<img className='lists_img' src={blackCourses} alt="Курсы" />
							<p>Курсы</p>
						</li>
						<li className='list'>
							<img className='lists_img' src={vocabulary} alt="Словарь" />
							<p>Словарь</p>
						</li>
						<li className='list'>
							<img className='lists_img' src={crown} alt="Рейтинг" />
							<p>Рейтинг</p>
						</li>
					</ul>
				</nav>
				<div className='logout'>
					<img src={logout} alt="" />
					<p>Выйти</p>
				</div>
			</div>
		</>
	)
}

export default SideBar;