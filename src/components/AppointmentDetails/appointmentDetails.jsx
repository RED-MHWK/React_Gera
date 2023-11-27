import Header from "../Header/Header.jsx";
import './AppointmentDetails.css'
import {useAtom} from "jotai";
import {patientNumberAtom} from "../../patientNumberAtom.js";
import {langAtom} from "../../App.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import VideoPlayer from "../VideoPlayer/videoPlayer.jsx";
import {FormattedMessage} from "react-intl";
import messages from "./appointmentDetails.messages.js";

function AppointmentDetails(){

    const [patientNumber] = useAtom(patientNumberAtom);
    const [lang] = useAtom(langAtom);

    const [jsonData, setJsonData] = useState('');

    const path = `http://localhost:8000/Details/${patientNumber}/${lang}`

    document.title = `Patient - ${patientNumber}`;

    useEffect(() => {
        // Fetch the JSON data from the API
        axios.get(path)
            .then(response => {
                setJsonData(response.data);
            })
            .catch(error => {
                console.error('Error fetching preps:', error);
            });
    }, [path]);

    const information = jsonData && jsonData.length > 0 ? jsonData[0].information : '';

    return(
        <>
            <div className={'gridCon'}>
                <div className={'detailsHeader'}></div>
                <Header></Header>
                <div className={'h2Cont'}>
                    <p className={'h2'}><FormattedMessage {...messages.detailsHeaderp1}/><span className={'h2Highligth'}><FormattedMessage {...messages.detailsHeaderp2}/></span></p>
                </div>
                <section className={'scrollContainer'}>
                    <p className={'mainInfo'}>{information}</p>
                    <ul>

                    </ul>
                    <VideoPlayer patientNumber={patientNumber}/>
                </section>
            </div>
        </>
    )
}

export default AppointmentDetails