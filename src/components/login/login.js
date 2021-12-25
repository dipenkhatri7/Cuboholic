import './login.css'

function Login(){
    return(
        <div class="login">
            <h1>Login</h1>
            <input type="email" placeholder="Email or Username" required />
            <input type="password" placeholder="Password" required />
            <button class="sumbit">Continue</button>
            <p><a href="/forget.html">Forget your password?</a> </p>
            <p>Don't have an account? <a href="/signup.html">Register now</a> </p>
        </div>
    ) 
}
export default Login;