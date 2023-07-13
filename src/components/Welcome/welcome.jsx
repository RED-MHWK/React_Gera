import Header from "../Header/Header.jsx";
import './Welcome.css'
import Character from "./welcomeAssets/SRH_Nurse_welcome.png";
function Welcome() {

    return (
        <>
            <dialog></dialog>
            <div className={'gridCon'}>
                <div className={'welcomeHeader'}></div>
                <Header></Header>
                <img src={Character} alt={'NurseCharacter'} className={'nurseWelcome'}/>
            </div>
        </>
    )
}
export default Welcome;