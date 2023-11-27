import {useEffect, useState} from "react";
import {useLocation} from "wouter";
import {Html5QrcodeScanner, Html5QrcodeScanType} from "html5-qrcode";

import messages from './qrScan.messages.js';
import {FormattedMessage} from "react-intl";

import Header from "../Header/Header.jsx";

import './QrScanner.css'
import axios from "axios";
import {useAtom} from "jotai";
import {patientNumberAtom} from "../../patientNumberAtom.js";



function QrScanner(){

    document.title = 'scanning..'

    const [patientNumber, setPatientnumber] = useAtom(patientNumberAtom)

    const [location, setLocation] = useLocation();

    const [qrValue, setQrValue] = useState('');

    useEffect(() => {

        const scanner = new Html5QrcodeScanner('reader',{
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 1,
            rememberLastUsedCamera: true,
            supportedScanTypes: [
                Html5QrcodeScanType.SCAN_TYPE_CAMERA
            ],
        });

        scanner.render(qrSucces, qrError);

        function qrSucces(qrResult){
            console.log(qrResult)
            scanner.clear();
            setQrValue(qrResult);
        }
        function qrError(){

        }

        const fetchData = async () => {
            try {
                if (qrValue.length === 6) {
                    const response = await axios.get(`http://localhost:8000/Gate/${qrValue}`);
                    if (response.status === 200) {
                        setPatientnumber(qrValue)
                        if(patientNumber) {
                            setLocation(`/Menu/${patientNumber}`)
                        }
                    }
                } 
            } catch (error) {
                console.error('Error');
            }
        };

        fetchData();

    },[patientNumber, qrValue, setLocation, setPatientnumber])


    return(
        <>
        <div className={'gridCon'}>
            <div className={'scanHeaderBg'}></div>
            <Header></Header>
            <div className={'h2Cont'}>
                <p className={'h2'}><FormattedMessage {...messages.qrScanHeaderp1}/><span className={'h2Highligth'}><FormattedMessage {...messages.qrScanHeaderp2}/></span><FormattedMessage {...messages.qrScanHeaderp3}/></p>
            </div>
            <div className={'qrScanner'} id={'reader'}></div>

        </div>
        </>
    )
}

export default QrScanner;