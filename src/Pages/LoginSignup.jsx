import React, { useState } from "react"
import PropTypes from "prop-types"
import "./Css/LoginSignup.css"
import cart_cross_icon from "../Components/assets/cart_cross_icon.png"

const LoginSignup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up")

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={cart_cross_icon}
                        alt="Close"
                    />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && (
                        <input type="text" placeholder="Your Name" required />
                    )}
                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder="Password" required />
                </div>
                <button type="submit">
                    {currState === "Sign Up" ? "Create Account" : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>I agree to the terms and conditions</p>
                </div>
                {currState === "Login" ? (
                    <p>
                        Create a new account?{" "}
                        <span onClick={() => setCurrState("Sign Up")}>
                            Click here
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setCurrState("Login")}>
                            Login here
                        </span>
                    </p>
                )}
            </form>
        </div>
    )
}

LoginSignup.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
}

export default LoginSignup
