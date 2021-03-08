import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
// import Logo from "./event.jpeg"

export const NavBar = () => {
  const history = useHistory()

  return (
    <ul className="navbar">
      <li className="navbar__item">
        {/* <img className="navbar__logo" src={Logo} /> */}
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/">
          My Events
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/events">
          All Events
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/categories">
          Category 
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/food">
          Food Planner
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/foodtable">
          Food Table
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/users">
          Users
        </Link>
      </li>
      {localStorage.getItem("event_user_id") !== null ? (
        <li className="nav-item">
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
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </>
      )}{" "}
    </ul>
  )
}