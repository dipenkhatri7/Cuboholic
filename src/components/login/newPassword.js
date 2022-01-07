import './login.css'
function NewPassword(){
    return(
        <div className="login">
            <h1>New Password</h1>
            <input type="password" placeholder="New Password" required />
            <input type="password" placeholder="Confirm New Password" required />
            <><button className="sumbit">Continue</button></>
        </div>
    )
}
export default NewPassword;