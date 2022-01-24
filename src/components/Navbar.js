import React, { useState } from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import "./navbar.css"




const Navbar = ({user}) => {
  let navigate = useNavigate();
  const userIn = JSON.parse(localStorage.getItem('user-info'));
  
  const [show, setShow] = useState(false)

  function logout() {
    localStorage.clear();
    navigate('/login')
  }

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <div className="container">

            <Link className="logo " to="/">
              <h2>
                <span>L</span>okesh
                <span>A</span>pp
              </h2>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>

              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div
              className={`collapse navbar-collapse ${show ? "show" : ""}`} >
              
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                {
                  user ?
                    <>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/about"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/contact"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Contact
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/projects"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Projects
                        </NavLink>
                      </li>
                     

                      <li className="nav-item">
                        {/* <NavDropdown title={userIn.name }  > */}
                        <NavDropdown title={userIn? userIn.name : "UserA"}  >
                          <NavDropdown.Item onClick={()=>{navigate('/profile')} }>Profile</NavDropdown.Item>
                          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

                        </NavDropdown>
                      </li>

                    </>
                    :
                    <>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link "
                          aria-current="page"
                          exact to="/about"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          About
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/register"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Register
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact to="/login"
                          activeStyle={{ color: 'blue', fontWeight: 'bold' }}>
                          Log In
                        </NavLink>
                      </li>
                    </>
                }

                <div className="social-links">

                  <Link to="/" title="Facebook"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#" title="Twitter"><i className="fab fa-twitter"></i></Link>
                  <Link to="#" title="Instagram"><i className="fab fa-instagram"></i></Link>
                  <Link to="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </ul>

              {/* <form className="d-flex">
                <button
                 className="btn  btn-style btn-style-border "
                  // activeClassName="menu_active" 
                  activeStyle={{ color: 'blue', fontWeight: 'bold' }}
                  onClick={register} 
                  type="submit"
                  >
                  Register
                </button>
                <button className="btn  btn-style btn-style-border " onClick={logIn} type="submit">
                  Log In
                </button>
              </form> */}

            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar