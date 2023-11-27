import {useEffect, useState} from "react";

import Header from "../Header/Header.jsx";

import './Checklist.css'

import axios from "axios";
import {useAtom} from "jotai";
import {patientNumberAtom} from "../../patientNumberAtom.js";
import {langAtom} from "../../App.jsx";
import messages from "./checklist.messages.js";
import {FormattedMessage} from "react-intl";

function Checklist(){

    const [patientNumber] = useAtom(patientNumberAtom);
    const [lang] = useAtom(langAtom);

    const [jsonData, setJsonData] = useState("");


    const path = `http://localhost:8000/List/${patientNumber}/${lang}`

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

    const handleButtonClick = (key) => {
        const updatedData = {
            ...jsonData,
            [key]: [jsonData[key][0], !jsonData[key][1]] // Toggle the boolean value
        };

        // Update the data on the server using Axios
        axios.post(path, updatedData)
            .then(response => setJsonData(response.data))
            .catch(error => console.error('Error updating data:', error));
    };

    return(
        <>
            <div className={'gridCon'}>
                <div className={'checklistHeader'}></div>
            <Header></Header>
                <div className={'h2Cont'}>
                    <p className={'h2'}><FormattedMessage {...messages.checklistHeaderp1}/><span className={'h2Highligth'}><FormattedMessage {...messages.checklistHeaderp2}/></span></p>
                </div>
                <div className={'checklistCon'}>
                    {Object.entries(jsonData).map(([key, [label]]) => (
                    <button
                        key={key}
                        onClick={() => handleButtonClick(key)}
                        className={`checklistItem${jsonData[key][1]}`}
                    >{label}</button>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Checklist