import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Errorpage from "./pages/Errorpage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";

import './stylesheets/layout.css'
// import './stylesheets/form.css'
// import './stylesheets/products.css'
import './stylesheets/authentication.css'
import Protected from "./components/Protected";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";


function App() {

  // const currentUser = true;

  const [user, setUser] = useState(null);
  useEffect(() => {
    /*
     setInterval used in order to refresh the page constantly
 in order to have the "logout" button show immediately in place of
 "login", as soon as user logs out.
 */
    setInterval(() => {
      const a = localStorage.getItem("user-login")
      setUser(a)
    }, [])

  }, []);

  return (
    <Router>
      <>
        <Navbar user={user} />
        <div>
          <Routes>
            <Route path='/login' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />
            <Route path='/' exact element={<Home />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/contact' exact element={<Contact />} />

            {/* <Route exact path="/services" element={currentUser ? <Services /> : <Login />} />
            <Route exact path="/profile" element={currentUser ? <Settings /> : <Login />} /> */}

            <Route exact path="/projects" element={<Protected cmp={Projects} />} />
            <Route exact path="/profile" element={<Protected cmp={Profile} />} />

            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  )

}

export default App;
