import {useEffect, useState} from "react";
import {useLocation} from "wouter";
import {Html5QrcodeScanner, Html5QrcodeScanType} from "html5-qrcode";

import messages from './qrScan.messages.js';
import {FormattedMessage} from "react-intl";

import Header from "../Header/Header.jsx";

import './QrScanner.css'



function QrScanner(setPassQrValue){

    const [location, setLocation] = useLocation();



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
            scanner.clear();
            console.log(qrResult)
            setLocation("/");
            setPassQrValue(qrResult);
        }
        function qrError(qrErr){
           // console.warn(qrErr);
        }

    },[setLocation, setPassQrValue])


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