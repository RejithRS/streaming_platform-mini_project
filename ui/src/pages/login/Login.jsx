import "./login.scss"

export default function Login() {
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
            <img src="/images/thallumala.jpg" 
            alt="" className="logo" />

            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or Phone number" />
                <input type="password" placeholder="password" />
                <button className="loginbutton">Sign In</button>
                <span>New to Netflix?<b> Sign up now.</b></span>
            </form>
        </div> 
    </div>
  )
}
