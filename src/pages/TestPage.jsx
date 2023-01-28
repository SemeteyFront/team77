import React from 'react';
import { Link } from 'react-router-dom';
import logoNavbar from '../images/logo-navbar.png';
import burgerIcon from '../images/burger.png';
import searchIcon from '../images/search-icon.png';
import profileIcon from '../images/profile.png';
import './testPage.css';

const TestPage = () => {
	return (
		<main className='test'>
			<div className="test__container">
				<div className="test__wrapper">
					<div className="test__navbar">
						<div className="test__logo">
							<Link to="#" className="test__navbar-logo">
								<img src={logoNavbar} alt="logo" className="test__navbar-logo-img" />
							</Link>
						</div>
						<div className="test__burger">
							<img src={burgerIcon} alt="icon" className="test__burger-icon" />
						</div>
						<p className="test__article">Hi Jay Park!</p>
						<div className="test__search-prof">
							<img src={searchIcon} alt="icon" className="test__search-icon" />
							<img src={profileIcon} alt="icon" className="test__prof-icon" />
						</div>
					</div>
					<div className="test__content">
						<div className="test__header">
							<h2 className="test__header-title">Название курса</h2>
						</div>
						<div className="test__questions">
							<p className="test__questions-title">Вопрос</p>
							<p className="test__questions-numbers">5 из 20</p>
						</div>
						<form className="test__form">
							<div className="test__form-flex">
								<lable className="test__lable">A)</lable>
								<input type="text" className="test__input"  placeholder='вариант'/>
							</div>
							
							<div className="test__form-flex">
								<lable className="test__lable">B)</lable>
								<input type="text" className="test__input"  placeholder='вариант'/>
							</div>
							
							<div className="test__form-flex">
								<lable className="test__lable test__lable">C)</lable>
								<input type="text" className="test__input-active"  placeholder='вариант'/>
							</div>
							
							<div className="test__form-flex">
								<lable className="test__lable">D)</lable>
								<input type="text" className="test__input"  placeholder='вариант'/>
							</div>
							<button className="test__btn">
								<Link to="#" className="test__btn-link">Далее</Link>
							</button>
						</form>
					</div>
				</div>	
			</div>
		</main>
	)
}

export default TestPage;