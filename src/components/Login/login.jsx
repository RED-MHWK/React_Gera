import {useState} from "react";
import {useLocation} from "wouter";

import Header from "../Header/Header.jsx";

import './Login.css'

import alert from './loginAssets/alert.svg'
import arrow from './loginAssets/arrow_orange_right.svg'
import disArrow from './loginAssets/arrow_nightblue_right.svg'
import qrCodeIcon from './loginAssets/qr-code_orange.svg'
import Character from "./loginAssets/SRH_Nurse_cutout.svg";



function Login() {

    const correctNumber = 'ABC123';

    const [patientNumber , setPatientNumber] = useState('');

    const [showError , setShowError] = useState(false);
    const [showErrorSymbol, setShowErrorSymbol] = useState(false);

    const [hiddenQr, setQrHidden] = useState(false);
    const qrVisibility = `qr${hiddenQr ? 'hidden': 'visible'}`;

    const [hidePushableButton, setHidePushableButton] = useState(false);
    const pushAbleButton = `activeButton${hidePushableButton ? 'visible':'hidden'}`;

    const [hideInactiveButton, setHideInactiveButton] = useState(false);
    const inActiveButton = `inActiveButton${hideInactiveButton ? 'visible' : 'hidden'}`;

    const [buttonAvailability, setButtonAvailability] = useState(false);
    const buttonAvailable = `buttonAvailability${buttonAvailability ? 'Available' : 'Unavailable'}`;


    const [location, setLocation] = useLocation();

    const handleSubmit = event =>{
        event.preventDefault();
    }

    const onPatientNumberChange = event => {
        const {value} = event.target;
        setPatientNumber(value);

        setShowError(value != correctNumber && value.length == 6);
        setShowErrorSymbol(value != correctNumber && value.length == 6);

        setQrHidden(value != '');
        setHidePushableButton(value == correctNumber);
        setHideInactiveButton(value != '' && value != correctNumber);
        setButtonAvailability(value == correctNumber);

        const input = event.target;
        const start = input.selectionStart;
        const end = input.selectionEnd;
        input.value = input.value.toUpperCase();
        input.setSelectionRange(start, end);
    }


    return (
        <>
            <div className={'gridCon'}>
                <div className={'mainHeader'}></div>

                <Header></Header>

                <div className={'h2Cont'}>
                    <p className={'h2'}>Bitte geben Sie Ihre <span className={'h2Highligth'}>Patientennummer</span> ein.</p>
                </div>

                <div className={'middleCont'}>
                    <form onSubmit={handleSubmit} className={'patientNumberForm'}>

                    <img src={Character} alt={'Nurse-Character'} className={'nurse'}/>

                    <div className={'inputCon'}>
                         <input className={'numberInput'}
                           name={'patientNumber'}
                           onChange={onPatientNumberChange}
                           type={'text'} maxLength={6}/>
                            {showErrorSymbol && <img src={alert} alt={'Alert-symbol'} className={'errorSymbol'}/>}
                    </div>
                        {showError && <p className={'error'}>Please enter your Patientnumber</p>}

                        <button className={'forgotButton'} onClick={() => setLocation("/")}>Patientennummer vergessen?</button>
                     </form>
                </div>

                <div className={'buttonCon'}>
                    <div className={'buttonBg'}>
                        <button className={buttonAvailable} onClick={() => setLocation("/Menu")}></button>
                        <img src={arrow} alt={'Forward-Button-Icon'} className={pushAbleButton}/>
                        <img src={disArrow} alt={'Forward-Button-Icon_disabled'} className={inActiveButton}/>
                        <img src={qrCodeIcon} alt={'QrCode-Icon'} className={qrVisibility}/>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Login;