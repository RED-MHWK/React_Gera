import './forwardButton.css'
import arrow from './assets_forawdButton/arrow_orange_right.svg'
import disArrow from './assets_forawdButton/arrow_nightblue_right.svg'
import qrCodeIcon from './assets_forawdButton/qr-code_orange.svg'
import {useState} from "react";


function ForwardButton() {

    const [hiddenQr, setQrHidden] = useState(false);
    const qrVisibility = `visibility${hiddenQr ? 'hidden': 'visible'}`


    return (
        <>
            <div className={'buttonCon'}>
                <div className={'buttonBg'}>
                    <button className={'button'}></button>
                    <img src={arrow} alt={'Forward-Button-Icon'} className={'buttonIcon'}/>
                    <img src={disArrow} alt={'Forward-Button-Icon_disabled'} className={'buttonIconDisabled'}/>
                    <img src={qrCodeIcon} alt={'QrCode-Icon'} className={qrVisibility, 'qrCode'}/>

                </div>
            </div>
            </>
    );
}

export default ForwardButton;