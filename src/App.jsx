import {Route} from 'wouter';
import {IntlProvider} from "react-intl";
import {atom, useAtom} from "jotai";
import {patientNumberAtom} from "./patientNumberAtom.js";

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


const DEFAULT_LOCALE = 'de-DE';

const MESSAGES = {
    'en-US': messages_en
};

const langAtom = atom(navigator.language);
export {langAtom};

function App() {

const [patientNumber, setPatientnumber] = useAtom(patientNumberAtom)

const [locale] = useAtom(langAtom);

  return (
<IntlProvider locale={locale} defaultLocale={DEFAULT_LOCALE} messages={MESSAGES[locale]}>

        <Route path={`/Appointment&Information/${patientNumber}`} component={AppointmentDetails}/>
        <Route path={`/Checklist/${patientNumber}`} component={Checklist}/>
        <Route path={`/Documents&Admission/${patientNumber}`} component={DocsAdmission}/>
        <Route path={`/ResponsibleTeam/${patientNumber}`} component={Team}/>
        <Route path={`/Menu/${patientNumber}`} component={Menu} patientNumber={patientNumber} lang={locale}/>
        <Route path={'/QrScanner'} component={QrScanner}/>
        <Route path={'/Login'} component={Login}/>
        <Route path={'/'} component={Welcome}/>

</IntlProvider>
  )
}

export default App
