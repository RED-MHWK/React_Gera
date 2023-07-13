import {useEffect, useState} from "react";
import {useLocation} from "wouter";
import {Html5QrcodeScanner, Html5QrcodeScanType} from "html5-qrcode";

import './QrScanner.css'

function QrScanner(){

    useEffect(() => {

        const scanner = new Html5QrcodeScanner('reader',{
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 6,
            rememberLastUsedCamera: true,
            supportedScanTypes: [
                Html5QrcodeScanType.SCAN_TYPE_CAMERA
            ],
        });

        scanner.render(qrSucces, qrError);

        function qrSucces(qrResult){
            scanner.clear();
            setScanResult(qrResult);
        }
        function qrError(qrErr){
            console.warn(qrErr);
        }

    },[])

    /*
    const [scanResult, setScanResult] = useState('');
    */

    /*
    function qrCodeInput(){
        document.getElementById('qrIdValue').value = scanResult;
    }

    */

    return(
        <div  id={'reader'}></div>
    )
}

export default QrScanner;