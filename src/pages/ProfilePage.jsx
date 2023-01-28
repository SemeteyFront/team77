import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/soloLogo.png';
import dashboard from '../images/dashboard.png';
import blackCourses from '../images/blackCourse.png';
import vocabulary from '../images/vocabulary.png';
import crown from '../images/crown.png';
import logout from '../images/logout.png';
import burgerIcon from '../images/burger.png';
import searchIcon from '../images/search-icon.png';
import profileIcon from '../images/profile.png';
import indicatorIcon from '../images/indicator.png';
import ratingIcon from '../images/rating.png';
import greenIndicator from '../images/green-indicator.png';
import './profilePage.css';

const ProfilePage = () => {
	return (
		<main className='profile'>
			<div className="profile__container">
				<div className="profile__wrapper">

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

					<div className="profile__main-block">
						<div className="profile__main-navbar">
							<div className="profile__burger">
								<img src={burgerIcon} alt="icon" className="profile__burger-icon" />
							</div>
							<p className="profile__content">Hi Jay Park!</p>
							<img src={searchIcon} alt="icon" className="profile__searc-icon" />
							<img src={profileIcon} alt="icon" className="profile__profile-icon" />
						</div>
						<div className="profile__change-navbar">
							<img src={profileIcon} alt="icon" className="profile__avatar-icon" />
							<p className="profile__change-text">Jay Park</p>
								<Link to="#" className="profile_change-btn-link">Изменить</Link>
						</div>
						<div className="profile__courses-title">Мои курсы</div>
						<div className="profile__courses">
							<div className="profile__courses-content">
								<div className="profile__img-placeholder">

								</div>
								<div className="profile__rating-container">
									<p className="profile__rating-text">Embark On The Journey <br /> Of Becoming An Artist </p>
									<p className="profile__name-text">Название курса </p>
									<div className="profile__rating-indicator">
										<p className="profile__process">65% в процессе</p>
										<p className="profile__complete">100% Complete</p>
										<img src={indicatorIcon} alt="icon" className="profile__indicator" />
										<img src={greenIndicator} alt="icon" className="profile__green-indicator" />	
									</div>
									<div className="profile__rating-stars">
										<button className="profile__rating-btn">
											<Link to="#" className="profile__rating-btn-link">Вы подписаны</Link>
										</button>
										<button className="profile__complete-btn">
											Завершено
										</button>
										<img src={ratingIcon} alt="" className="profile__rating-icon" />
									</div>
								</div>
							</div>

							<div className="profile__courses-content">
								<div className="profile__img-placeholder">

								</div>
								<div className="profile__rating-container">
									<p className="profile__rating-text">Embark On The Journey <br /> Of Becoming An Artist </p>
									<p className="profile__name-text">Название курса </p>
									<div className="profile__rating-indicator">
										<p className="profile__process">0%</p>
										<p className="profile__complete">100% Complete</p>	
										<img src={indicatorIcon} alt="icon" className="profile__indicator" />
										<img src={greenIndicator} alt="icon" className="profile__green-indicator" />
									</div>
									<div className="profile__rating-stars">
										<button className="profile__rating-btn">
											<Link to="#" className="profile__rating-btn-link">Вы подписаны</Link>
										</button>
										<button className="profile__complete-btn">
											Завершено
										</button>
										<img src={ratingIcon} alt="" className="profile__rating-icon" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default ProfilePage;