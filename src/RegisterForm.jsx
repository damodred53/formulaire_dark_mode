import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { FaUnlockKeyhole } from 'react-icons/fa6';
import "./index.css";

const RegisterForm = () => {


    return (

        <div className="registerForm">

            <div className="siteInfo">
                <h2>Bienvenue sur mon formulaire light/dark mode</h2>
                <p>Vous pouvez cliquer sur l interrupteur pour alterner entre mode sombre et mode clair.</p>
            </div>

            <div className="registerFormBlock">

                <div className="registerInputs">
                    <div className="inputs">
                        <BsPeopleFill style={{
                            width: '50px',
                            fontSize: '20px',
                            marginTop: "13px"
                        }}/>
                        <input placeholder="identifiant" type="text" />
                    </div>
                

                    <div className="inputs">
                        <FaUnlockKeyhole style={{
                                width: '50px',
                                fontSize: '20px',
                                marginTop: "13px"
                            }} />
                            <input placeholder="password" type="password" />
                    </div>
                    
                

                    <div className="inputs">
                        <FaUnlockKeyhole style={{
                            width: '50px',
                            fontSize: '20px',
                            marginTop: "13px"
                        }} />
                        <input placeholder="password de nouveau" type="password" />
                    </div>
                </div>

                <div className="registerBtn">
                    <button>SIGN UP</button>
                </div>

                <div className="forgotPassword">
                    <p>Forgot password</p>
                </div>
            </div>

            

        </div>

    )
}

export default RegisterForm;