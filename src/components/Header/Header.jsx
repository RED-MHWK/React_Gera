import pipe from "../Login/loginAssets/pipe.svg";
import SRH_Logo from "../Login/loginAssets/SRH_Logo_white.svg";

import "./Header.css"



function Header(){

    return(
        <>
                <img src={pipe} alt={'SRH-Pipe'} className={'pipe'}/>
                <div className={'logoCont'}>
                    <img src={SRH_Logo} alt={'SRH-Logo'} className={'srhLogo'}/>
                    <p className={'logoText'}>Wald-Klinikum<br/>Gera</p>
                </div>
            </>
    )
}

export default Header;