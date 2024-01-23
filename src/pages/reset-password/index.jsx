import React from "react";
import { InputIcon } from "../../components/form/components/Input/Input";
import { FormReset } from "../../components/form/Form";
import { MediumTextTomato } from "../../components/form/components/text/Text";

const Reset = () => {
    return (
        <div style={{
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            justifyContent : 'center',
            alignItems : 'center',
            gap : '15px'
        }}>
            <MediumTextTomato text={'Digite a sua nova senha'} />
           <FormReset />
            
        </div>
    )

}

export default Reset