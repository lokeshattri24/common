import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "../assets/images/C.png"

const About = () => {

    return (
        <>
            
            <section id="header" className=" main ">
                <div className="col-md-11  ">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-md-6  ">
                            <h1>
                                Grow Your Business With
                                <strong className="brand-name"> Loki007</strong>
                            </h1>
                            <h2 className="my-3">
                                We are the team of talented developers
                            </h2>
                            <div className="mt-3">
                                <NavLink to="/contact" className="btn ">
                                    Contact Us
                                </NavLink>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img
                                src={img}
                                width="400"
                                // height="400"
                                className="img-fluid  animated"
                                alt="home img"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About