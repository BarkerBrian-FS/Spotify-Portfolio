import React from 'react'
import { FaSpotify } from "react-icons/fa";

function Login() {
  return (
    <div className="login">
    <h1>Please Login</h1>
    <a className="login--btn" href="http://localhost:3001/spotify/v1/login">
      Login
    </a>
  </div>
  )
}

export default Login