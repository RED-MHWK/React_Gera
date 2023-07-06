import SRH_Logo from './assets/SRH_Logo_white.svg'
import pipe from './assets/pipe.svg'
import Character from './assets/SRH_Nurse_cutout.svg'
import './App.css'
import PatientNumberInput from "./components/patientnumber/patientnumber.jsx";
import ForwardButton from "./components/forwardButton/forwardButton.jsx";

function App() {

//usestate hook for value statehook als prop zu button

  return (
        <>
            <div className={'gridCon'}>
                <div className={'mainHeader'}></div>
                <img src={pipe} alt={'SRH-Pipe'} className={'pipe'}/>

                <div className={'logoCont'}>
                <img src={SRH_Logo} alt={'SRH-Logo'} className={'srhLogo'}/>
                <p className={'logoText'}>Wald-Klinikum<br/>Gera</p>
                </div>

                <div className={'h2Cont'}>
                <p className={'h2'}>Bitte geben Sie Ihre <span className={'h2Highligth'}>Patientennummer</span> ein.</p>
                </div>

                <div className={'middleCont'}>
                <img src={Character} alt={'Nurse-Character'} className={'nurse'}/>
                <PatientNumberInput/>
                </div>

                <ForwardButton></ForwardButton>
            </div>
        </>
  )
}

export default App
