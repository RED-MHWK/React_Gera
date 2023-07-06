import {Route, Switch} from 'wouter';

import Login from "./components/Login/login.jsx";
import Idle from "./components/Idle/Idle.jsx"

function App() {


  return (

    <Switch>
        <Route path='/Login' component={Login}/>
        <Route path='/' component={Idle}/>
    </Switch>

  )
}

export default App
