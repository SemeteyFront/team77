import React from 'react';
import { Link } from 'react-router-dom';
import soloEngImg from '../../src/images/logo.png';
import './loginPage.css';

const LoginPage = () => {
	return (
		<>
			<main className="login">
				<div className="login__container">
					<div className="login__wrapper">
						<div className="login__sidebar">
							<div className="login__logo-img">
								<img src={soloEngImg} alt="img" />
							</div>
						</div>

						<form className="login__form">
							<div className="login__form-block">
								<div className="login__form-link">
									<p>Нет аккаунта?
										<Link to='/register'>Зарегистрироваться</Link>
									</p>
								</div>

								<div className="login__input-Div">
									<label>Email адрес</label>
									<input type="email" className="login__email-input"/>
								</div>
								<br />

								<div className="login__input-Div">
									<label>Пароль</label>
									<input type="password" className="login__password-input"/>
								</div>
								<br />
								
									<button type="submit" className="login__btn">
										Войти
									</button>
									<div className="login__forgot-pass">
										<Link to='/forgotpass' className="login__forgot-pass-link">Забыли пароль?</Link>
									</div>
								
									<p className='login__article'>Или войти с помощью</p>
								<div className="login__gf">
									<div className="google__signin">
										<Link to="/google" className="google__signin-link">Google</Link>
									</div>
									<div className="facebook__signin">
										<Link to="/facebook" className="facebook__signin-link">Facebook</Link>
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

export default LoginPage;