import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { Link, useNavigate } from 'react-router-dom';
import soloEngImg from '../../src/images/logo.png';
import './loginPage.css';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
		localStorage.setItem('email', email)
    let form = new FormData();
    form.append("email", email);
    form.append("password", password);

    dispatch(login({form}))
    .then(() => navigate('/'));
  };

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

						<form className="login__form" onSubmit={submitLogin}>
							<div className="login__form-block">
								<div className="login__form-link">
									<p>Нет аккаунта?
										<Link to='/register'>Зарегистрироваться</Link>
									</p>
								</div>

								<div className="login__input-Div">
									<label>Email адрес</label>
									<input type="email" className="login__email-input" placeholder="user@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
								</div>
								<br />

								<div className="login__input-Div">
									<label>Пароль</label>
									<input type="password" className="login__password-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
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