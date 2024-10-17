import React, { useState } from 'react';

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function closeMobileNav() {
    setShowNav(false);
  }

  function toggleNav() {
    setShowNav(!showNav);
  }

  function closeMobileNavOnResize() {
    if (window.innerWidth > 700) {
      closeMobileNav();
    }
  }

  window.onresize = closeMobileNavOnResize;

  return (
    <div className="topbar bg-black text-white"> {/* Добавлен фон и цвет текста */}
      <div className="profile-pic">
        <img src="{ProfilePic}" alt="" />
      </div>
      <div onClick={toggleNav} className="nav-toggler">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className={`tabs ${showNav && 'mobile-tabs'}`}>
        <a onClick={closeMobileNav} href="#home" className="tab-button">
          Главная
        </a>
        <a onClick={closeMobileNav} href="#about" className="tab-button">
          О себе
        </a>
        <a onClick={closeMobileNav} href="#skills" className="tab-button">
          Навыки
        </a>
        <a onClick={closeMobileNav} href="#projects" className="tab-button">
          Проекты
        </a>
      </div>
    </div>
  );
}

