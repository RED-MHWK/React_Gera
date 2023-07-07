import {Route, Switch} from 'wouter';

import Login from "./components/Login/login.jsx";
import Menu from "./components/MainMenu/mainMenu.jsx";
import AppointmentDetails from "./components/AppointmentDetails/appointmentDetails.jsx";
import Checklist from "./components/Checklist/checklist.jsx";
import DocsAdmission from "./components/DocsAndAdmission/docsAdmission.jsx";
import Team from "./components/Team/team.jsx";

import "./App.css"

function App() {


  return (
    <Switch>
        <Route path={'/Appointemt&Information'} component={AppointmentDetails}/>
        <Route path={'/Checklist'} component={Checklist}/>
        <Route path={'/Documents&Admission'} component={DocsAdmission}/>
        <Route path={'/ResponsibleTeam'} component={Team}/>
        <Route path='/Menu' component={Menu}/>
        <Route path='/' component={Login}/>
    </Switch>
  )
}

export default App
