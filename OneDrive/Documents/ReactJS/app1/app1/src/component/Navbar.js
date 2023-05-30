import React from 'react'
import "./Navbar.css"
import { MenuBarData } from './MenuBarData'
function Navbar() {
  return (
    <>
      <nav className="NavbarItems">
        <h1>
          <em>
            <strong>D</strong>ua <strong>F</strong>oundation
          </em>
          <i className="fab fa-react"></i>
        </h1>
        <ul>
          {MenuBarData.map((item, index) => {
            console.log(item.icon)
            return (
              <>
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    <item.icon/>
                    {item.title}
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar
