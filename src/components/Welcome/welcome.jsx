import Header from "../Header/Header.jsx";
import './Welcome.css'
import Character from "./welcomeAssets/SRH_Nurse_welcome.png";
function Welcome() {

    return (
        <>
            <div className={'gridCon'}>
                <div className={'welcomeHeader'}></div>
                <Header></Header>
                <button className={'fo'}></button>
                <img src={Character} alt={'NurseCharacter'} className={'nurseWelcome'}/>
            </div>
        </>
    )
}
export default Welcome;