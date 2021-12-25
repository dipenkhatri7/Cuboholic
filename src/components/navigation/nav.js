import './navi.css'
function Nav () {
    return (
        <nav>
    <a class="logoo" href="/index.html">
      <h1>CUBOHOLIC</h1>
    </a>
    <ul class="nav-links">
      <li class="hoverline" data-content="TIMER"><a href="/#">TIMER</a></li>
      <li class="hoverline" data-content="BATTLE"><a href="/#">BATTLE</a></li>
      <li class="hoverline" data-content="STATISTICS"><a href="/#">STATISTICS</a></li>
      <li class="hoverline" data-content="CONNECT"><a href="/#">CONNECT</a></li>
      <li class="hoverline" data-content="OPTIONS"><a href="/#">OPTIONS</a></li>
      <button class="loginsignup" id="myButton">Login/Signup</button>
    </ul>

    <div class="burger">
      <a href="/#">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </a>
    </div>
  </nav>
    )
}

export default Nav;