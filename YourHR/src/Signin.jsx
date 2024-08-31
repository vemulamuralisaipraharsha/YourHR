import React from "react";
import './App.css'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

    function Signin() {
        const handleLoginSuccess = (credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log(decoded);
            window.location.href = '/form';
        };
        
        const handleLoginFailure = (error) => {
            console.error('Login Failure:', error);
        };

        return(
            <>  
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginFailure}
                    className="google-button"
                />
                <div className="left-part">
                    <h1>YourHR</h1>
                    <p>Connecting You to Your Dream Job, One Opportunity at a Time.</p>
                </div>
                <div className="right-part">
                    <label for="email">Email</label>
                    <input type="text" placeholder="email" id="email"></input>
                    <label for="pasword">password</label>
                    <input type="text" placeholder="password" id="password"></input>
                    <button type="submit">Signin</button>
                </div>
            </>
        )
    }

    export default Signin