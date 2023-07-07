import Header from "../Header/Header.jsx";
import './Checklist.css'

function Checklist(){

    return(
        <>
            <div className={'gridCon'}>
                <div className={'checklistHeader'}></div>
            <Header></Header>
            <h1 className={'placeHolder'}>Checklist</h1>
            </div>
        </>
    )
}

export default Checklist