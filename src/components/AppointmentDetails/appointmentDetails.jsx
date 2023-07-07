import Header from "../Header/Header.jsx";
import './AppointmentDetails.css'

function AppointmentDetails(){

    return(
        <>
            <div className={'gridCon'}>
                <div className={'detailsHeader'}></div>
                <Header></Header>
                <h1 className={'placeHolder'}>Appointment Details</h1>
            </div>
        </>
    )
}

export default AppointmentDetails