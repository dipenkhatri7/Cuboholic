import './login.css'
function NewPassword(){
    return(
        <div class="login">
            <h1>New Password</h1>
            <input type="password" placeholder="New Password" required />
            <input type="password" placeholder="Confirm New Password" required />
            <a href="/login.html"><button class="sumbit">Continue</button></a>
        </div>
    )
}
export default NewPassword;