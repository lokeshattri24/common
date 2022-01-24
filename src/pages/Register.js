import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Loader from '../components/Loader';
// import { toast } from 'react-toastify';

const Register = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-login')) {
            navigate("/services");
        } else navigate("/register");
    }, [navigate])

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cPassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setUser({ ...user, [name]: value });

    }

    const submit = (e) => {
        e.preventDefault();
        console.log("User", user)
        alert(
            ` ${user.name} you are registered successfully `
        )
        localStorage.setItem("user-info", JSON.stringify(user));
        navigate("/login");
    }

    return (
        <div className='main'>
            {/* {loading && (<Loader />)} */}

            <div className="row justify-content-center align-items-center">
                <div className="register-top"></div>

                <div className="col-md-5">
                    <lottie-player
                        src="https://assets3.lottiefiles.com/packages/lf20_yr6zz3wv.json"
                        background="transparent"
                        speed="1"
                        // style="width: 300px; height: 300px;"
                        loop
                        autoplay>

                    </lottie-player>
                </div>
                <div className="col-md-4 z1  ">
                    <div className="auth-form  ">
                        <h2>Register</h2>
                        <hr />
                        <input type="text" className='form-control' name="name" placeholder='Name' value={user.name} onChange={handleChange} required />
                        <input type="text" className='form-control' name="email" placeholder='Email' value={user.email} onChange={handleChange} required />
                        <input type="password" className='form-control' name="password" placeholder='Password' value={user.password} onChange={handleChange} required />
                        <input type="password" className='form-control' name="cPassword" placeholder='confirm password' value={user.cPassword} onChange={handleChange} required />

                        <button className='my-3 auth-btn' onClick={submit}>REGISTER</button>
                        <hr />
                        <Link to='/login' style={{ color: "blue" }}>Click Here to Login</Link>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Register