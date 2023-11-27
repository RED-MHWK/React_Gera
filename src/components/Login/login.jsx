import {useEffect, useState} from "react";
import {useLocation} from "wouter";

import messages from './login.messages.js';
import {FormattedDate, FormattedMessage, FormattedNumber} from "react-intl";

import Header from "../Header/Header.jsx";

import './Login.css'

import alert from './loginAssets/alert.svg'
import arrow from './loginAssets/arrow_orange_right.svg'
import disArrow from './loginAssets/arrow_nightblue_right.svg'
import qrCodeIcon from './loginAssets/qr-code_orange.svg'
import Character from "./loginAssets/SRH_Nurse_cutout.svg";
import {useAtom} from "jotai";
import {patientNumberAtom} from "../../patientNumberAtom.js";
import axios from "axios";


function Login() {

    document.title = 'Login'

    const [patientNumber, setPatientnumber] = useAtom(patientNumberAtom)

    const [logGate, setLogGate] = useState(false)

    const [valueHolder, setValueholder] = useState('')

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

    const [qrScanAvailability, setQrScanAvailability] = useState(true);
    const qrScanAvailable = `qrScanAvailability${qrScanAvailability ? 'Available' : 'Unavailable'}`;

    const [location, setLocation] = useLocation();

    const path = `http://localhost:8000/Gate/${valueHolder}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (valueHolder.length === 6) {
                    const response = await axios.get(path);
                    if (response.status === 200) {
                        setPatientnumber(valueHolder);
                        setLogGate(true);
                        setHidePushableButton(true);
                        setButtonAvailability(true);
                    }
                } else {
                    setLogGate(false);
                    setShowError(false);
                    setShowErrorSymbol(false);
                    setHidePushableButton(false);
                    setButtonAvailability(false);
                }
            } catch (error) {
                console.error('Error');
                setShowError(true);
                setShowErrorSymbol(true);
                setLogGate(false);
            }
        };

        fetchData();
    }, [valueHolder, path, setPatientnumber]);

    const handleSubmit = event =>{
        event.preventDefault();
    }

    const onPatientNumberChange = event => {
        const {value} = event.target;

        setQrScanAvailability(value == '');
        setQrHidden(value != '');
        setHideInactiveButton(value != '' && logGate != true);

        const input = event.target;
        const start = input.selectionStart;
        const end = input.selectionEnd;
        input.value = input.value.toUpperCase();
        input.setSelectionRange(start, end);

        setValueholder(input.value)
    }

    return (
        <>
            <section className={'gridCon'}>
                <div className={'mainHeader'}></div>

                <Header></Header>

                <div className={'h2Cont'}>
                    <p className={'h2'}><FormattedMessage {...messages.loginHeaderp1}/><span className={'h2Highligth'}><FormattedMessage {...messages.loginHeaderp2}/></span><FormattedMessage {...messages.loginHeaderp3}/></p>
                </div>

                <div className={'middleCont'}>
                    <form onSubmit={handleSubmit} className={'patientNumberForm'}>

                    <img src={Character} alt={'Nurse-Character'} className={'nurse'}/>

                    <div className={'inputCon'}>
                         <input
                             className={'numberInput'}
                             value={valueHolder}
                             id={'qrIdValue'}
                             name={'patientNumber'}
                             onChange={onPatientNumberChange}
                             type={'text'} maxLength={6}/>
                            {showErrorSymbol && <img src={alert} alt={'Alert-symbol'} className={'errorSymbol'}/>}
                    </div>
                    <div className={'errorCon'}>
                        {showError && <p className={'error'}>Please enter your Patientnumber</p>}
                    </div>

                        <button className={'forgotButton'} onClick={() => setLocation("/")}>Patientennummer vergessen?</button>
                     </form>
                </div>

                <div className={'buttonCon'}>
                    <div className={'buttonBg'}>
                        <button className={buttonAvailable} onClick={() => setLocation(`/Menu/${patientNumber}`)}></button>
                        <button className={qrScanAvailable} onClick={() => setLocation("/QrScanner")}></button>
                        <img src={arrow} alt={'Forward-Button-Icon'} className={pushAbleButton}/>
                        <img src={disArrow} alt={'Forward-Button-Icon_disabled'} className={inActiveButton}/>
                        <img src={qrCodeIcon} alt={'QrCode-Icon'} className={qrVisibility}/>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Login;