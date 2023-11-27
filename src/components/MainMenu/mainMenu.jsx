import {useLocation} from "wouter";
import {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import {patientNumberAtom} from "../../patientNumberAtom.js";
import {langAtom} from "../../App.jsx";

import messages from './mainMenu.messages.js';
import {FormattedDate, FormattedMessage, FormattedNumber} from "react-intl";

import Header from "../Header/Header.jsx";

import './MainMenu.css'
import {useAtom} from "jotai";



function Menu(){

    const [location, setLocation] = useLocation();

    const [patientNumber] = useAtom(patientNumberAtom);
    const [lang] = useAtom(langAtom);

    const [jsonData, setJsonData] = useState("");

    const path = `http://localhost:8000/PN/${patientNumber}/${lang}`

    document.title = `Patient - ${patientNumber}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (patientNumber) {
                    const response = await axios.get(path);
                    setJsonData(response.data);
                }
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchData();
    }, [path, patientNumber]);

    const date = jsonData && jsonData.length > 0 ? jsonData[0].date : '';
    const time = jsonData && jsonData.length > 0 ? jsonData[0].time : '';
    const reason = jsonData && jsonData.length > 0 ? jsonData[0].reason : '';
    const section = jsonData && jsonData.length > 0 ? jsonData[0].section : '';
    const level = jsonData && jsonData.length > 0 ? jsonData[0].level : '';
    const sectionColor = jsonData && jsonData.length > 0 ? jsonData[0].color : '';

    Menu.propTypes ={
        patientNumber: PropTypes.string.isRequired,
        lang: PropTypes.string.isRequired,
    }

    return(
        <>
        <div className={'gridCon'}>
            <div className={'headerBg'}>
                <p className={'appointmentHeadline'}><FormattedMessage {...messages.menuHeader}/></p>
            </div>

            <Header></Header>

            <div className={'appointmentInformation'}>
                <p className={'informationText'}><FormattedMessage {...messages.appointmentDate}/> {date}</p>
                <p className={'informationText'}><FormattedMessage {...messages.appointmentTime}/> {time}</p>
                <p className={'informationText'}><FormattedMessage {...messages.appointmentReason}/> {reason}</p>
                <p className={'informationText'}><FormattedMessage {...messages.appointmentSection}/> {section}</p>
                <p className={'informationText'}><FormattedMessage {...messages.appointmentLevel}/> {level}</p>
            </div>

            <div className={'menuButtonCont'}>
                <button className={'menuButtons'} onClick={() => setLocation(`/Appointment&Information/${patientNumber}`)}><FormattedMessage {...messages.menuButtonAppointmentInformation}/></button>
                <button className={'menuButtons'} onClick={() => setLocation(`/Checklist/${patientNumber}`)}><FormattedMessage {...messages.menuButtonChecklist}/></button>
                <button className={'menuButtons'} onClick={() => setLocation(`/Documents&Admission/${patientNumber}`)}><FormattedMessage {...messages.menuButtonDocumentsAdmission}/></button>
                <button className={'menuButtons'} onClick={() => setLocation(`/ResponsibleTeam/${patientNumber}`)}><FormattedMessage {...messages.menuButtonTeam}/></button>
                <div className={'footer'}></div>
            </div>
        </div>
        </>
    )
}

export default Menu;