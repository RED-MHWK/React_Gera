import {useState} from "react";
import {useLocation} from "wouter";

import {FormattedDate, FormattedMessage, FormattedNumber} from "react-intl";

import Header from "../Header/Header.jsx";
import './Welcome.css'
import Character from "./welcomeAssets/SRH_Nurse_welcome.png";
import Arrow from "./welcomeAssets/arrow_orange_right.svg";
function Welcome() {

    const [location, setLocation] = useLocation();

    const [forwardButtonState, setForwardButtonState] = useState(false);

    const [modalVisibility, setModalVisibility] = useState(false)
    const modalVisible = `welcomeModal${modalVisibility ? '' : 'Closed'}`;

    const modalCloseHandle = event =>{
        const privacy = document.getElementById('privacy');
        privacy.close();
        setModalVisibility(false);
    }

    const forwardButtonHandle = event =>{
        if(forwardButtonState == false){
            const privacy = document.getElementById('privacy');
            setModalVisibility(true)
            setForwardButtonState(true);
            privacy.showModal();
        }
        else{
            setLocation("/Login")
        }
    }

    return (
        <>
            <dialog id={'privacy'} className={modalVisible}>
                <p className={'conditions'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <button className={'acceptButton'} onClick={modalCloseHandle}>Akzeptieren</button>
            </dialog>
            <div className={'gridCon'}>
                <div className={'welcomeHeader'}></div>
                <Header></Header>
                <img src={Character} alt={'NurseCharacter'} className={'nurseWelcome'}/>
                <div className={'buttonConWelcome'}>
                    <div className={'buttonBg'}>
                        <img src={Arrow} alt={Arrow} className={'forwardButtonArrow'}/>
                        <button className={'forwardButton'} onClick={forwardButtonHandle}></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Welcome;