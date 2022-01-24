import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imgcont from "../assets/images/contact.jpg"
import img2 from "../assets/images/developer.jpg"

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    })

    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email}, Here is what is whant to say : ${data.msg} `
        )

        navigate("/");
    }

    return (
        <>

            <div className=" main ">
                <div className="row justify-content-center align-items-center ">

                    <div className="col-md-5">
                        <img
                            src={img2}
                            width="400"
                            // height="400"
                            className="img-fluid  animated"
                            alt="home img"
                        />
                        <img
                            src={imgcont}
                            width="400"
                            // height="400"
                            className="img-fluid  animated"
                            alt="home img"
                        />
                    </div>

                    <form className="form col-md-5 " onSubmit={formSubmit}>
                        <h1 style={{ fontSize: 30 }}>Contact Us</h1>
                        <p style={{ fontSize: 20 }}>Enter Your Details </p>

                        <div className="mb-1">
                            <label htmlFor="name" className="px-3 h5">
                                Name*:
                            </label>
                            <input
                                type="text"
                                // class="form-control"
                                // id="exampleFormControlInput1"
                                id="name"
                                name="fullname"
                                value={data.fullname}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"

                            />
                        </div>

                        <div className="mb-1">
                            <label className="px-3 h5">
                                Phone:
                            </label>
                            <input
                                type="number"
                                // class="form-control"
                                // id="exampleFormControlInput1"
                                name="phone"
                                value={data.phone}
                                onChange={handleChange}
                                placeholder="Your mobile number"
                            />
                        </div>

                        <div className="mb-1">
                            <label className="px-3 h5">
                                Email*:
                            </label>
                            <input
                                type="email"
                                // className="form-control"
                                // id="exampleFormControlInput1"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                                required
                            />
                        </div>

                        <div className="mt-3" >
                            <label className="px-1 h5">
                                Message*
                            </label>
                            <textarea 
                                // className=" w-75 "
                                // id="exampleFormControlTextarea1"
                                rows="3"
                                name="msg"
                                value={data.msg}
                                onChange={handleChange}
                                placeholder="Enter Your Message Here"
                                required
                            />
                        </div>

                        {/* <button className="btn btn-outline-primary" type="submit">Submit form</button> */}
                        <button className="btn my-4" type="submit">Submit form</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact