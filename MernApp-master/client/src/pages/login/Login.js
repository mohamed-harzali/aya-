import React, { useEffect, useState } from 'react'
import './login.css'
import { Link , useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../redux/actions/authActions'



const Login = () => {

  const [info , setInfo] = useState({
    email : "" ,
    Password : ""
  })

  const dispatch = useDispatch()
  const auth = useSelector(state=>state.authReducer)

  const navigate = useNavigate()

  
  useEffect(()=>{
    if (auth.isAuth === true) {
      navigate('/Profile')
    }
  },[navigate,auth.isAuth])
  
  
  const handleChange = (e) => {
    setInfo({...info,[e.target.name]:e.target.value})
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(info))
  }

  


  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexIYv8vhyhL-LS5W4FrCBrG_yH8PFWO37aw69gkBYEyOZaC-1kN7fTo1cc7DY7-FRmhQ&usqp=CAU"
                className="img6"
                alt="Sample "
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="sin">Sign in with :</p>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                    Email address :
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    name="email"
                    onChange={handleChange}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                    Password :
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    placeholder="Enter password"
                    name="Password"
                    onChange={handleChange}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/register">
                      {" "}
                      <span className="link-warning">Register</span>{" "}
                      <p className="no9ta">.</p>
                    </Link>{" "}
                  </p>
                  <button
                    type="button"
                    className="btn btn-light btn-1g"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={handleLogin}
                  >
                    {" "}
                    {auth && auth.isLoading ? "Loading" : "Login"}{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="img4">
          <img
            src="data:image/png;base64,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"
            width="100"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </div>
      </section>
    </div>
  );
}

export default Login