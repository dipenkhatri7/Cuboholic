import Nav from './components/navigation/nav'
import Timer from './components/timerPage/timer'
import CubeIcon from './components/cubeSelect/cubeIcon'
import Login from './components/login/login'
import Forget from './components/login/forget'
import Transition from './components/login/transition'
import SignUp from './components/login/signUp'
import NewPassword from './components/login/newPassword'
import CubeSelector from './components/cubeSelect/cubeSelector'
function App(){
  
  return (
    <div className="container">
      <Nav />
      <Timer />
      <CubeIcon />
      {/* <Login /> */}
      {/* <Forget /> */}
      {/* <Transition /> */}
      {/* <SignUp /> */}
      {/* <NewPassword /> */}
      {/* <CubeSelector /> */}

    </div>
  );
}

export default App
