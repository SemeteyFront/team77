import React from 'react'
import logo from '../../images/soloLogo.png'
import dashboard from '../../images/dashboard.png'
// import courses from '../../images/courses.png'
import blackCourses from '../../images/blackCourse.png'
import vocabulary from '../../images/vocabulary.png'
import crown from '../../images/crown.png'
import logout from '../../images/logout.png'
import search from '../../images/search.png'
import profile from '../../images/profile.png'
import './rating.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getRating } from '../../redux/slices/getRating'
import { Link } from 'react-router-dom'

function Rating() {
  const dispatch = useDispatch()
  const { rating } = useSelector(state => state.rating)
  console.log(rating)

  useEffect(() => {
    dispatch(getRating())
  }, [dispatch])

  return (
    <div className='courses'>
      <div className='rightHome'>
        <div className='logo'>
          <img src={logo} alt="logo" />
          <p className='logoText'>SoloEng</p>
        </div>
        <nav>
          <ul className='lists'>
            <Link to={'/'} className='list'>
              <img className='lists_img' src={dashboard} alt="Главная" />
              <p>Главная</p>
            </Link>
            <Link to={'/courses'} className='list'>
              <img className='lists_img' src={blackCourses} alt="Курсы" />
              <p>Курсы</p>
            </Link>
            <li className='list'>
              <img className='lists_img' src={vocabulary} alt="Словарь" />
              <p>Словарь</p>
            </li>
            <Link to={'/rating'} className='list'>
              <img className='lists_img' src={crown} alt="Рейтинг" />
              <p>Рейтинг</p> 
            </Link>
          </ul>
        </nav>
        <div className='logout'>
          <img src={logout} alt="" />
          <p>Выйти</p>
        </div>
      </div>
      
      <div className='course'>
        <div className='course__header'>
          <p className='header__text'>Hi Jay Park!</p>
          <div className='header__search'>
            <div>
              <input
                type='search' 
                placeholder='search' 
                className='header__input'/>
              <img className='header__search-icon' src={search} alt="search" />
            </div>
            <img src={profile} alt="profile" />
          </div>
        </div>
        <div className='course__banner'>
          <h2 className='banner__text'>Топ лучших <img src={crown} alt='crown' /></h2>
        </div>
          {
            rating && rating[0].map(rait => <h1>{rait.username}</h1>)
          }
      </div>
    </div>
  )
}

export default Rating
