import {useState} from "react";

import './Login.css'

import alert from './loginAssets/alert.svg'
import arrow from './loginAssets/arrow_orange_right.svg'
import disArrow from './loginAssets/arrow_nightblue_right.svg'
import qrCodeIcon from './loginAssets/qr-code_orange.svg'
import SRH_Logo from './loginAssets/SRH_Logo_white.svg'
import pipe from './loginAssets/pipe.svg'
import Character from './loginAssets/SRH_Nurse_cutout.svg'



function Login() {

    const [patientNumber , setPatientNumber] = useState('');

    const [showError , setShowError] = useState(false);

    const [showErrorSymbol, setShowErrorSymbol] = useState(false);

    const [hiddenQr, setQrHidden] = useState(false);

    const qrVisibility = `visibility${hiddenQr ? 'hidden': 'visible'}`


    const handleSubmit = event =>{
        event.preventDefault();
    }

    const onPatientNumberChange = event => {
        const {value} = event.target;
        setPatientNumber(value);

        setShowError(value != 'ABC123' && value.length == 6);
        setShowErrorSymbol(value != 'ABC123' && value.length == 6);

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


            <form onSubmit={handleSubmit} className={'patientNumberForm'}>

                <div className={'inputCon'}>
                    <input className={'numberInput'}
                           name={'patientNumber'}
                           onChange={onPatientNumberChange}
                           type={'text'} maxLength={6}/>
                    {showErrorSymbol && <img src={alert} alt={'Alert-symbol'} className={'errorSymbol'}/>}
                </div>
                {showError && <p className={'error'}>Please enter your Patientnumber</p>}
                <button className={'forgotButton'}>Patientennummer vergessen?</button>
            </form>
                </div>

            <div className={'buttonCon'}>
                <div className={'buttonBg'}>
                    <button className={'button'}></button>
                    <img src={arrow} alt={'Forward-Button-Icon'} className={'buttonIcon'}/>
                    <img src={disArrow} alt={'Forward-Button-Icon_disabled'} className={'buttonIconDisabled'}/>
                    <img src={qrCodeIcon} alt={'QrCode-Icon'} className={qrVisibility, 'qrCode'}/>

                </div>
            </div>
            </div>

        </>
    );
}

export default Login;