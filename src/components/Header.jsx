import React, { useState } from "react"

const headerNav = [
   {
    title: "intro",
    url: "#intro"
   },
   {
    title: "skill",
    url: "#skill"
   },
   {
    title: "site",
    url: "#site"
   },
   {
    title: "portfolio",
    url: "#port"
   },
   {
    title: "contact",
    url: "#contact"
   }
]

function Header() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (                                                                  
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <h1>
            <a href="/">portfolio <em>react.js</em></a>
          </h1>
        </div>
        <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
          <ul>
            {headerNav.map((nav, index) => (
              <li key={index}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          aria-label="토글 버튼"
          role="button"
          tabIndex="0"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header