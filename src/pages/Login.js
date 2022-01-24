import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify';
// import Loader from '../components/Loader';

const Login = () => {

    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-login')) {
            navigate("/services");
        } else navigate("/login")
    }, [navigate])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [loading, setLoading] = useState(false)



    const submit = (e) => {
        e.preventDefault();
        let data = { email, password }
        console.log(data)

        if (!localStorage.getItem('user-info')) {
            alert(
                ` ${email} you are not registered `
            )
            navigate("/register");
        } else {
            // setLoading(true)
            localStorage.setItem("user-login", JSON.stringify(data));
            navigate("/services");
        }
    }


    return (
        <div className='main'>
            {/* {loading && (<Loader />)} */}

            <div className="row justify-content-center align-items-center">

                <div className="col-md-4 z1">
                    <div className="auth-form">
                        <h2>Login</h2>
                        <hr />
                        <input type="text" name="email" className='form-control' placeholder='email' value={email} onChange={(e) => (setEmail(e.target.value))} />
                        <input type="password" name="password" className='form-control' placeholder='password' value={password} onChange={(e) => (setPassword(e.target.value))} />


                        <button className='my-3 auth-btn' onClick={submit}>LOGIN</button>
                        <hr />
                        {/* <Link to='/register'>Click Here to Register</Link> */}
                        <div className="container1">
                            <div className="item">
                                <NavLink to="/contact" style={{ color: "red" }}>
                                    Forgot password?
                                </NavLink>
                            </div>
                            <div className="item mt-2">
                                <NavLink to="/register" style={{ color: "blue" }} >
                                    Click Here to Register
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-5 z1">
                    <lottie-player
                        src="https://assets2.lottiefiles.com/packages/lf20_gjmecwii.json"
                        background="transparent"
                        speed="1"
                        // style="width: 300px; height: 300px;"
                        loop
                        autoplay>

                    </lottie-player>
                </div>
                <div className="login-bottom"></div>

            </div>



        </div>
    )
}

export default Login