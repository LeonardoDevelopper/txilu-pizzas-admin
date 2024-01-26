import React, { useEffect } from "react";
import './style.css'
import { ButtonDefault, ButtonIcon, ButtonNavigate, ButtonSubmit } from "../../form/components/Button/Button";
import { Img } from "../../form/components/Img/Img";
import { BigTextTomato, SmallTextSilver, SmallTextWhite } from "../../form/components/text/Text";
import user from '../../svg/user.svg'
import bell from '../../svg/ico-notfy.svg'
const DashHeader = ({notify, photo, email}) => {
    function loguot() {
        window.localStorage.removeItem('TOKEN-ADMIN')
        console.log('loguot')
    }
    return (
        <header className= 'dashboard-header'>
            <BigTextTomato text={'Txilu Pizzas Admin'} />
            <div className="more">
                <div className="notify">
                    <ButtonIcon photo={bell} type={'img-m-ico'} />
                    <div className="count-notify">
                        <SmallTextWhite text={'4'} />
                    </div>

                </div>
                <div className="account">
                    <Img path={photo} type={'ico-photo'} />
                    <SmallTextSilver text={email} />
                    <ButtonNavigate fun={loguot} where={'sigin'} text={'Sair'} />
                    
                </div>
            </div>
        </header>
    )
}

export default DashHeader