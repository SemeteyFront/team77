import React from 'react';
import {Link, useParams} from 'react-router-dom';
import logoNavbar from '../images/logo-navbar.png';
import searchIcon from '../images/search-icon.png';
import profileIcon from '../images/profile.png';
import backArrow from '../images/back.png';
import questionImg from '../images/question-img.png';
import burgerIcon from '../images/burger.png';
import lineIcon from '../images/line-11.svg';
import './modulesPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CoursesById } from '../redux/slices/getCourses';
import { useNavigate } from 'react-router-dom';

const ModulesPage = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const courseID = useSelector(state => state.courses.id)
	const navigate = useNavigate()
	console.log(courseID)

	useEffect(() => {
		dispatch(CoursesById(id))
	}, [dispatch])
	return (
		<main className='modules'>
			<div className="modules__container">
				<div className="modules__wrapper">
					<div className="modules__navbar">
						<div className="modules__logo">
							<Link to="/" className="modules__logo-link">
								<img src={logoNavbar} alt="logo" className="modules__logo-img" />
							</Link>
						</div>
						<div className="modules__burger">
							<img src={burgerIcon} alt="icon" className="modules__burger-icon" />
						</div>
						<p className="modules__content">Hi Jay Park!</p>
						<div className="modules__search-prof">
							<img src={searchIcon} alt="icon" className="modules__search-icon" />
							<img src={profileIcon} alt="icon" className="modules__prof-icon" />
						</div>
					</div>
					<div className="modules__modules-block">
						<div className="modules__tasks">
							<img onClick={() => navigate(-1)} src={backArrow} alt="icon" className="modules__tasks-icon" />
							<p className="modules__tasks-text">Asking questions in English</p>
							<p className="modules__tasks-text-2">Название курса</p>
						</div>
						<div className="modules__modules-tests">
							{
								courseID &&
								courseID.moduls.map(btn => {
									return (
										<div key={btn.id}>
											<button className="modules__modules-btn-active">
												<Link to="#" className="active-link">{btn.title}</Link>
											</button>
												<img src={lineIcon} alt="icon" className="modules__modules-line" />
										</div>
									)
								})
							}
							
							<button className="modules__modules-btn">
								<Link to="#" className="modules__modules-btn-link">Тест</Link>
							</button>
						</div>
					</div>
					<div className="modules__question-forms-1">
						<div className="question__form-img-Div">
							<img src={courseID && courseID.image} alt="img" className="modules__question-forms-img" />
						</div>
					<div className="modules__question-forms-Div">
						<h2 className="question__forms-title">Question forms</h2>
						<ul className="question__form-menu">
							<li className="question__forms-item">Question order – grammar chart</li>
							<li className="question__forms-item">Question words</li>
						</ul>
					</div>
					<button className="modules__question-btn">
						<Link to="#" className="modules__question-link">Продолжить</Link>
					</button>
					</div>
					<div className="modules__question-forms">
						<div className="question__form-img-Div">
							<img src={questionImg} alt="img" className="modules__question-forms-img" />
						</div>
					<div className="modules__question-forms-Div">
						<h2 className="question__forms-title">Question forms</h2>
						<ul className="question__form-menu">
							<li className="question__forms-item">Question order – grammar chart</li>
							<li className="question__forms-item">Question words</li>
						</ul>
					</div>
					<button className="modules__question-btn">
						<Link to="#" className="modules__question-link">Начать</Link>
					</button>
					</div>
				</div>
			</div>
		</main>
	)
}

export default ModulesPage;