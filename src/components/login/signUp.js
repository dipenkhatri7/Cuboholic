import './login.css'
function SignUp(){
    return(
        <div class="login">
            <h1>Sign Up</h1>
            <input type="textbox" placeholder="Username" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <a href="transition.html"><button class="sumbit">Continue</button></a>
        </div>
    )
}
export default SignUp;