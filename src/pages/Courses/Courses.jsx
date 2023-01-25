import React from 'react'
import burger from './images/Burger.png'
import logo from './images/SoloEng.png'
import dashboard from './images/IconsMenuWhite/Dashboard.png'
import projects from './images/IconsMenuWhite/projects.png'
import vector from './images/IconsMenuWhite/vector.png'
import crown from './images/crown.png'
import logout from './images/crown.png'
import avatar from './images/AvatarPurple.png'

function Courses() {
  return (
    <div id="site">
      <button id="burger">
        <img id="burger-image" src={burger} alt="burger" />
      </button>
      <div id="menu">
        <button id="logo">
          <img class="iconsMenu" src={logo} alt="logo" />
        </button>

        <button class="menu">
          <img
            class="iconsMenu"
            src={dashboard}
            alt="dashboard"
          />
          Главная
        </button>
        <button class="menu">
          <img
            class="iconsMenu"
            src={projects}
            alt="projets"
          />
          Курсы
        </button>
        <button class="menu">
          <img
            class="iconsMenu"
            src={vector}
            alt=""
          />
          Словарь
        </button>
        <button class="menu">
          <img id="iconsMenuKing" src={crown} alt="crown" /> Рейтинг
        </button>

        <button class="menuOut">
          <img
            class="iconsMenu"
            src={logout}
            alt=""
          />
          Выйти
        </button>
      </div>
      <div id="navbar">
        <h2>Hi Jay Park!</h2>
        <input type="search" />
        <img src={avatar} id="avatar" alt="" />
      </div>
      <div id="panel">
        <h3>Изучай больше</h3>
        <div id="levels">
          <div class="level1">A 1</div>
          <div class="level2">A 2</div>
          <div class="level3">B 1</div>
          <div class="level4">B 2</div>
          <div class="level5">C 1</div>
        </div>
      </div>
      <div id="courses">
        <div class="card1">
          <div class="picture"></div>
          <div class="description">
            <h5>Embark On The Journey Of Becoming An Artist</h5>
            <div class="processes">
              <p>0% Complete</p>
              <div class="process" />
            </div>
            <button onclick="ClickMouse()" class="btnCourses">
              Подписаться
            </button>
            <div id="rating"></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Courses
