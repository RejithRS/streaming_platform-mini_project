import { useRef, useState } from "react"
import "./register.scss"

export default function Register() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = ()=>{
        setEmail(emailRef.current.value)
    };
    const handleFinish = ()=>{
        setPassword(passwordRef.current.value)
    };

  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
            <img src="/images/thallumala.jpg" 
            alt="" className="logo" />

        <button className="loginbutton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited Movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create account.
            </p>
            {!email ? (
                <div className="input">
                    <input type="email" placeholder="Email address" ref={emailRef} />
                    <button className="registerbutton" onClick={handleStart}>
                    Get started
                    </button>
                </div>
                ) : (
                <form className="input">
                    <input type="password" placeholder="password" ref={passwordRef} />
                    <button className="registerbutton" onClick={handleFinish}>
                        Start  
                    </button>
                </form>
            )}
            
        </div> 
    </div>
  )
}
