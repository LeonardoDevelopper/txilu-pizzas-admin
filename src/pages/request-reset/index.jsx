import React from 'react'
import { FormRequestReset } from '../../components/form/Form'
import { BigTextTomato, MediumTextTomato, SmallTextSilver, SmallTextTomato } from '../../components/form/components/text/Text'

const style = {
    width: '100%',
    height : '100vh',
    display: 'flex',
    justifyContent : 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap : '15px'
}
const RequestReset = () => {
    return (
        <div style={style}>
            <BigTextTomato text={'Redefinir senha'} />

            <SmallTextSilver text={'Voce receberá um email, siga os passos para repor sua palavra pass'} />
            <FormRequestReset />
        </div>
    )
}

export default RequestReset