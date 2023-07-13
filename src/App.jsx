import {useState} from "react";
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

import "./App.css"
import QrScanner from "./components/QrScanner/qrScanner.jsx";



const DEFAULT_LOCALE = 'de';

const MESSAGES = {
    'en': messages_en
};

const localeAtom = atom('de');
export {localeAtom};



function App() {

const [locale] = useAtom(localeAtom);

const [passQrValue, setPassQrValue] = useState('');

  return (
<IntlProvider locale={locale} defaultLocale={DEFAULT_LOCALE} messages={MESSAGES[locale]}>
    <Switch>
        <Route path={'/Appointemt&Information'} component={AppointmentDetails}/>
        <Route path={'/Checklist'} component={Checklist}/>
        <Route path={'/Documents&Admission'} component={DocsAdmission}/>
        <Route path={'/ResponsibleTeam'} component={Team}/>
        <Route path={'/Menu'} component={Menu}/>
        <Route path={'/Welcome'} component={Welcome}/>
        <Route path={'/QrScanner'} component={QrScanner}/>
        <Route path={'/'} component={Login}/>
    </Switch>
</IntlProvider>
  )
}

export default App
