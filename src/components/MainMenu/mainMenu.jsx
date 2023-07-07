import Header from "../Header/Header.jsx";
import './MainMenu.css'
import {useLocation} from "wouter";

function Menu(){
    const [location, setLocation] = useLocation();
    return(
        <>
        <div className={'gridCon'}>
            <div className={'headerBg'}>
                <p className={'appointmentHeadline'}>Ihr Termin</p>
            </div>

            <Header></Header>

            <div className={'appointmentInformation'}>
                <p className={'informationText'}>Datum:</p>
                <p className={'informationText'}>Uhrzeit:</p>
                <p className={'informationText'}>Besuchsgrund:</p>
                <p className={'informationText'}>Ort:
                    <div className={'floorTagBg'}>
                        <span className={'floorTag'}>U3</span>
                    </div>
                </p>
            </div>

            <div className={'menuButtonCont'}>
                <button className={'menuButtons'} onClick={() => setLocation("/Appointemt&Information")}>Terminvorbereitung &<br/> Informationen</button>
                <button className={'menuButtons'} onClick={() => setLocation("/Checklist")}>Checklist</button>
                <button className={'menuButtons'} onClick={() => setLocation("/Documents&Admission")}>Dokumente &<br/>Vorab-Anmeldung</button>
                <button className={'menuButtons'} onClick={() => setLocation("/ResponsibleTeam")}>Ihr zuständiges Team</button>
                <div className={'footer'}></div>
            </div>


        </div>
        </>
    )
}

export default Menu;