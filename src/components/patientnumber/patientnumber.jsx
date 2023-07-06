import alert from './assets_patientnumber/alert.svg'
import './patientnumber.css'
import {useState} from "react";


function PatientNumberInput(props) {

    const [patientNumber , setPatientNumber] = useState('');

    const [showError , setShowError] = useState(false);

    const [showErrorSymbol, setShowErrorSymbol] = useState(false);

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

        const valueToPass = value;
        valueToPass.callback;
    }


    return (
        <>

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

        </>
    );
}

export default PatientNumberInput;