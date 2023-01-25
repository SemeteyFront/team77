import React from 'react';
import { Link } from 'react-router-dom';
import soloEngImg from '../../src/images/logo.png';
import './registerPage.css';

const RegisterPage = () => {
	return (
		<>
			<main className="register">
				<div className="register__container">
					<div className="register__wrapper">
						<div className="register__sidebar">
							<div className="register__logo-img">
								<img src={soloEngImg} alt="img" />
							</div>
						</div>
						<form className="register__form">
							<div className="register__form-block">
								<div className="register__form-link">
									<p>Уже есть аккаунт?
										<Link to='/login'>Войти</Link>
									</p>
								</div>
								<div className="register__input-Div">
									<label className='register__username-lable'>Имя пользователя</label>
									<input type="username" className="register__username-input"/>
								</div>
								
								<div className="register__input-Div">
									<label className='register__email-lable'>Email адрес</label>
									<input type="email" className="register__email-input"/>
								</div>
								
								<div className="register__input-Div">
									<label className='register__password-lable'>Пароль</label>
									<input type="password" className="register__password-input"/>
								</div>

								<div className="register__input-Div">
									<label className='register__confirm-pass-lable'>Подтвердите пароль</label>
									<input type="password" className="register__confirm-pass-input"/>
								</div>
								
								<div className="register__flex-Div">
									<div className="register__checkbox-Div">
										<label className="register__checkbox-lable" htmlFor="checkbox"><span>Принять условия</span></label>
										<div className="register__checkbox"></div>
									</div>
									<div className="register__btn-div">
										<button type="submit" className="register__btn">
										  Зарегистрироваться
									   </button>
									</div>
								</div>
								<div className="register__forgot-pass">
									<Link to='/forgotpass' className="register__forgot-pass-link">Забыли пароль?</Link>
								</div>
								<div className="register__form-double">
									<p>Уже есть аккаунт?
										<br />
										<Link to='/login'>Войти</Link>
									</p>
								</div>
								<p className='register__article'>Или войти с помощью</p>
								<div className="register__gf">
									<div className="google__signup">
										<Link to="#google" className="google__signup-link">Google</Link>
									</div>
									<div className="facebook__signup">
										<Link to="#facebook" className="facebook__signup-link">Facebook</Link>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</main>
		</>
	)
}

export default RegisterPage;