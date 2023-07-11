import Header from "../Header/Header.jsx";
import './Welcome.css'
import Character from "./welcomeAssets/SRH_Nurse.svg";
function Welcome() {

    return (
        <>
            <div className={'gridCon'}></div>
            <div className={'welcomeHeader'}></div>
            <Header></Header>
            <img src={Character} alt={'NurseCharacter'} className={'nurseWelcome'}/>

        </>
    )
}
export default Welcome;