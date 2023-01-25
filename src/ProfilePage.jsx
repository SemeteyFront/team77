// import React from 'react';
// import soloEng from '../src/images/logo-navbar.png';
// import dashboardIcon from '../src/images/dashboard.png';
// import coursesIcon from '../src/images/courses.png';
// import vocabularyIcon from '../src/images/vocabulary.png';
// import crownIcon from '../src/images/crown.png';
// import logoutIcon from '../src/images/logout.png';
// import searchIcon from '../src/images/search.png';
// import profileIcon from '../src/images/profile.png';
// import indicatorIcon from '../src/images/indicator.png';
// import ratingIcon from '../src/images/rating.png';
// import './profilePage.css';

// const ProfilePage = () => {
// 	return (
// 		<main className='profile'>
// 			<div className="profile__container">
// 				<div className="profile__wrapper">
// 					<div className="profile__sidebar">
// 						<img src={soloEng} alt="logo" className="profile__sidebar-logo" />
// 						<div className="profile__sidebar-category">
// 							<div className="profile__dashboard">
// 								<img src={dashboardIcon} alt="icon" className="profile__dashboard-icon" />
// 								<p className="profile__dashboard-text">Главная</p>
// 							</div>
// 							<div className="profile__courses">
// 								<img src={coursesIcon} alt="icon" className="profile__courses-icon" />
// 								<p className="profile__courses-text">Курсы</p>
// 							</div>
// 							<div className="profile__courses">
// 								<img src={vocabularyIcon} alt="icon" className="profile__vocabulary-icon" />
// 								<p className="profile__vocabulary-text">Словарь</p>
// 							</div>
// 							<div className="profile__courses">
// 								<img src={crownIcon} alt="icon" className="profile__crown-icon" />
// 								<p className="profile__crown-text">Рейтинг</p>
// 							</div>
// 						</div>
// 						<div className="profile__sidebar-logout">
// 							<img src={logoutIcon} alt="icon" className="profile__logout-icon" />
// 							<p className="profile__logout-text">Выйти</p>
// 						</div>
// 					</div>
// 					<div className="profile__main-block">
// 						<div className="profile__main-navbar">
// 							<img src={searchIcon} alt="icon" className="profile__searc-icon" />
// 							<img src={profileIcon} alt="icon" className="profile__profile-icon" />
// 						</div>
// 						<div className="profile__change-navbar">
// 							<img src={profileIcon} alt="icon" className="profile__avatar-icon" />
// 							<p className="profile__change-text">Jay Park</p>
// 							<button className="profile__change-btn">
// 								<a href="#" className="profile_change-btn-link">Изменить</a>
// 							</button>
// 						</div>
// 						<div className="profile__courses">
// 							<h2 className="profile__courses-title">Мои курсы</h2>
// 							<div className="profile__courses-content">
// 								<div className="profile__img-placeholder">

// 								</div>
// 								<div className="profile__rating-container">
// 									<p className="profile__rating-text">Embark On The Journey Of Becoming An Artist </p>
// 									<div className="profile__rating-indicator">
// 										<p className="profile__process">65% в процессе</p>
// 										<img src={indicatorIcon} alt="icon" className="prifile__indicator" />	
// 									</div>
// 									<div className="profile__rating-stars">
// 										<button className="profile__rating-btn">
// 											<a href="#" className="profile__rating-btn-link">Вы подписаны</a>
// 											<img src={ratingIcon} alt="" className="profile__rating-icon" />
// 										</button>
// 									</div>
// 								</div>
// 							</div>

// 							<div className="profile__courses-content">
// 								<div className="profile__img-placeholder">

// 								</div>
// 								<div className="profile__rating-container">
// 									<p className="profile__rating-text">Embark On The Journey Of Becoming An Artist </p>
// 									<div className="profile__rating-indicator">
// 										<p className="profile__process">0%</p>	
// 									</div>
// 									<div className="profile__rating-stars">
// 										<button className="profile__rating-btn">
// 											<a href="#" className="profile__rating-btn-link">Вы подписаны</a>
// 											<img src={ratingIcon} alt="" className="profile__rating-icon" />
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</main>
// 	)
// }

// export default ProfilePage;