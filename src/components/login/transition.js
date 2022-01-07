import './login.css'

function Transition(){
    return(
        <div className="login">
            <h1>Transition Pin</h1>

            <input type="textbox" placeholder="******" />

            <><button className="sumbit">Continue</button></>
            <p>Didn't got transition pin? <>Resend</> </p>
        </div>
    )
}
export default Transition;