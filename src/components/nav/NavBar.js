import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
// import Logo from "../Logo/Bigevents.png"

export const NavBar = () => {
  const history = useHistory()

  return (
    <ul className="navbar">
      {/* <li className="navbar__item">
        <img className="navbar__logo" 
        src={Logo} alt="img" width="200" height ="200"></img> 
      </li> */}

      <li className="navbar__item">
        <Link className="navbar__link" to="/events">
          My Events
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/categories">
          Category 
        </Link>
      </li>

      <li className="navbar__item">
        <Link className="navbar__link" to="/foodtables">
          Food Table
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/foodtypes">
          Food Types
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/users">
          Users
        </Link>
      </li>
      {/* <li className="navbar__item">
        <Link className="navbar__link" to="/users">
          Log out
        </Link>
      </li> */}
      {localStorage.getItem("event_user_id") !== null ? (
        <li className="navbar__item">
          <button
            className="nav-link fakeLink"
            onClick={() => {
              localStorage.removeItem("event_user_id")
              history.push({ pathname: "/" })
            }}
          >
            Logout
          </button>
        </li>
      ) : (
        <>
          <li className="navbar__item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </>
      )}{" "}
    </ul>
  )
}