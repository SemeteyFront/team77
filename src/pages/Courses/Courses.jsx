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
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCourses } from '../../redux/slices/getCourses'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Courses() {
  const arr = ['A1', 'A2', 'B1', 'B2', 'C1']
  const [level, setLevel] = useState(arr[0])
  const dispatch = useDispatch()
  const { courses } = useSelector(state => state.courses)

  useEffect(() => {
    dispatch(getCourses())
  }, [dispatch])

  const levels = (level) => {
    setLevel(level)
  }
  console.log(level)

  const course = courses &&
  courses.filter(course => course.cours_lev === level).map(course => {
    return (
      <Link
        to={`/modules/${course.slug}`}
        key={course.image}
        className='content__data'
      >
        <div className='data__play'>
          <img src={course.image} alt="" />
        </div>
        <div className='data__more'>
          <p>{course.title}</p>
        </div>
      </Link>
    )
  })

  console.log(course)
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
          <h2 className='banner__text'>Изучай больше</h2>
          <div className='banner__btns'>
            {
              arr && arr.map(btn => {
                return (
                  <button
                    key={btn}
                    className='banner__btn'
                    onClick={() => levels(btn)}
                    >{
                      btn}
                    </button>
                )
              })
            }
          </div>
        </div>
        <div className="course__content">
          {
            course
          }
        </div>
      </div>
    </div>
  )
}

export default Courses
