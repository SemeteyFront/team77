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
import './courses.scss'

function Courses() {
  return (
    <div className='courses'>
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
          <h2 className='banner__text'>Изучай больше</h2>
          <div className='banner__btns'>
            <button className='banner__btn'>A 1</button>
            <button className='banner__btn'>A 2</button>
            <button className='banner__btn'>B 1</button>
            <button className='banner__btn'>B 2</button>
            <button className='banner__btn'>C 1</button>
          </div>
        </div>
        <div className="course__content">
          <div className='content__data'>
            <div className='data__play'></div>
            <div className='data__more'>
            </div>
          </div>
          <div className='content__data'>
            <div className='data__play'></div>
            <div className='data__more'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
