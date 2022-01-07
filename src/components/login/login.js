import './login.css'
function Login(){
    return(
        <div className="login">
            <h1>Login</h1>
            <input type="email" placeholder="Email or Username" required />
            <input type="password" placeholder="Password" required />
            <button className="sumbit">Continue</button>
            <p><>Forget your password?</> </p>
            <p>Don't have an account? <a href="/signup.html">Register now</a> </p>
        </div>
    ) 
}
export default Login;