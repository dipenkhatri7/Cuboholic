import './login.css'

function SignUp(){
    return(
        <div className="login">
            <h1>Sign Up</h1>
            <input type="textbox" placeholder="Username" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <><button className="sumbit">Continue</button></>
        </div>
    )
}
export default SignUp;