import React from 'react';
import { Link } from 'react-router-dom';
import burgerIcon from '../images/burger.png';
import searchIcon from '../images/search-icon.png';
import profileIcon from '../images/profile.png';
import grammarIndicator from '../images/grammar-ind.png';
import editIcon from '../images/edit-icon.png';
import yellowLine from '../images/yellow-line.png';
import grayLine from '../images/gray-line.png';
import blueLine from '../images/blue-line.png';
// import indicatorIcon from '../images/indicator.png';
import ratingIcon from '../images/rating.png';
import greenIndicator from '../images/green-indicator.png';
import './dashboardPage.css';
import SideBar from '../SideBar';

const DashboardPage = () => {
	return (
		<main className='dashboard'>
			<div className="dashboard__container">
				<div className="dashboard__wrapper">
					<SideBar/>
					<div className="dashboard__main-block">
						<div className="dashboard__navbar">
							<div className="dashboard__burger">
								<img src={burgerIcon} alt="icon" className="dashboard__burger-icon" />
							</div>
							<p className="dashboard__content">Hi Jay Park!</p>
							<img src={searchIcon} alt="icon" className="dashboard__searc-icon" />
							<img src={profileIcon} alt="icon" className="dashboard__profile-icon" />
						</div>
						<h2 className="dashboard__main-title">Продолжить обучение</h2>
						<div className="dashboard__grammar-Div">
							<div className="dashboard__grammar-flex">
								<div className="dashboard__english-grammar">
								<h4 className="english__grammar-title">English grammar</h4>
								<p className="english__grammar-text">Вопросительные формы </p>
								<button className="english__grammar-btn">A2</button>
								<img src={ grammarIndicator} alt="icon" className="english__grammar-indicator" />
							</div>
							<img src={ editIcon} alt="icon" className="grammar__edit-img" />
							</div>
							<div className="course_persent-Div">
								<h6 className="course__persent-title">Завершенность курса</h6>
								<div className="course__persent">
									<img src={blueLine} alt="img" className="course__persent-img" />
									<img src={grayLine} alt="img" className="course__gray-img" />
									<p className="course__persent-sum">84%</p>
								</div>
								<h6 className="course__persent-title">Просмотренные уроки</h6>
								<div className="course__persent">
									<img src={yellowLine} alt="img" className="course__persent-img yellow-img" />
									<img src={grayLine} alt="img" className="course__gray-img" />
									<p className="course__persent-sum">46%</p>
								</div>
							</div>
						</div>
						<div className="complete__courses-title">Завершенные курсы</div>
						<div className="complete__courses">
							<div className="complete__courses-container">
								<div className="complete__img-placeholder">

								</div>
								<div className="complete__rating-container">
									<p className="complete__rating-text">Embark On The Journey <br /> Of Becoming An Artist </p>
									<p className="complete__name-text">Название курса </p>
									<div className="complete__rating-indicator">
										<p className="complete__process">100% Complete</p>
										<img src={greenIndicator} alt="icon" className="complete__green-indicator" />	
									</div>
									<div className="complete__rating-stars">
										<button className="complete__rating-btn">
											Завершено
										</button>
										<img src={ratingIcon} alt="" className="complete__rating-icon" />
									</div>
								</div>
							</div>
							<div className="complete__courses-container">
								<div className="complete__img-placeholder">

								</div>
								<div className="complete__rating-container">
									<p className="complete__rating-text">Embark On The Journey <br /> Of Becoming An Artist </p>
									<p className="complete__name-text">Название курса </p>
									<div className="complete__rating-indicator">
										<p className="complete__process">100% Complete</p>
										<img src={greenIndicator} alt="icon" className="complete__green-indicator" />	
									</div>
									<div className="complete__rating-stars">
										<button className="complete__rating-btn">
											Завершено
										</button>
										<img src={ratingIcon} alt="" className="complete__rating-icon" />
									</div>
								</div>
							</div>
							<div className="leave__rating">
								<Link to='#' className="leave__rating-link">Leave a rating</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default DashboardPage;