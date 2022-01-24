import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
  let Cmp = props.cmp
  
  let navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('user-login')) {
            navigate("/register");
        }
    },[navigate])

    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Protected