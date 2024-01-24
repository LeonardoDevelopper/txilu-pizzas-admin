import React from "react";
import './style.css'
import { ButtonIcon } from "../../form/components/Button/Button";
import { Img } from "../../form/components/Img/Img";
import { BigTextTomato, SmallTextSilver, SmallTextWhite } from "../../form/components/text/Text";
import user from '../../svg/user.svg'
import bell from '../../svg/ico-notfy.svg'
const DashHeader = () => {
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
                    <Img path={user} type={'img-ico'} />
                    <SmallTextSilver text={'Leonardodevelopper924@gmail.com'} />

                </div>
            </div>
        </header>
    )
}

export default DashHeader