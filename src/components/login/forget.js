import './login.css'
function Forget(){
    return(
    <div class="login">
        <h1>Recovery</h1>
        <input type="textbox" placeholder="Username" />
        <input type="email" placeholder="Email Address" />
        <a href="/transition.html"><button class="sumbit">Continue</button></a>
    </div>
    )
}
export default Forget;