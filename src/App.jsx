import {Route, Switch} from 'wouter';
import {IntlProvider} from "react-intl";
import {atom, useAtom} from "jotai";

import messages_en from '../lang/en.json'

import Welcome from "./components/Welcome/welcome.jsx";
import Login from "./components/Login/login.jsx";
import Menu from "./components/MainMenu/mainMenu.jsx";
import AppointmentDetails from "./components/AppointmentDetails/appointmentDetails.jsx";
import Checklist from "./components/Checklist/checklist.jsx";
import DocsAdmission from "./components/DocsAndAdmission/docsAdmission.jsx";
import Team from "./components/Team/team.jsx";
import QrScanner from "./components/QrScanner/qrScanner.jsx";

import "./App.css"



const APPOINTMENT_FILE = 'appointment.json';
const CHECKLIST_FILE = 'checklist.json';

const DEFAULT_LOCALE = 'de';

const MESSAGES = {
    'en': messages_en
};

const localeAtom = atom(document.documentElement.lang);
export {localeAtom};



function App() {

const [locale] = useAtom(localeAtom);

  return (
<IntlProvider locale={locale} defaultLocale={DEFAULT_LOCALE} messages={MESSAGES[locale]}>
    <Switch>
        <Route path={'/Appointemt&Information'} component={AppointmentDetails}/>
        <Route path={'/Checklist'} component={Checklist}/>
        <Route path={'/Documents&Admission'} component={DocsAdmission}/>
        <Route path={'/ResponsibleTeam'} component={Team}/>
        <Route path={'/Menu'} component={Menu}/>
        <Route path={'/QrScanner'} component={QrScanner}/>
        <Route path={'/Login'} component={Login}/>
        <Route path={'/'} component={Welcome}/>
    </Switch>
</IntlProvider>
  )
}

export default App
