import React from 'react'
import './style.css'
import { ButtonAside, ButtonIcon, ButtonSubmit } from '../../form/components/Button/Button'
import icoHome from '../../svg/ico-home.svg'
import icoOp from '../../svg/ico-operacoes.svg'
import icodelivers from '../../svg/ico-delivers.svg'
import Home from '../../../pages/home/home'
import SecundaryAside from '../secudaryAside'


const PrimaryAside = () => {
    const [aside1, setAside1] = React.useState('Home')
    return (
        <div id='Aside' >
            <div id='primary' className='primary-aside'>
                <ButtonAside fun={setAside1} src={icoHome} text={'Home'} selected={true} />
                <ButtonAside fun={setAside1} src={icoOp} text={'Operações'} />
                <ButtonAside fun={setAside1} src={icodelivers} text={'Entregadores'} />
            </div>
            <h2 style={{
                position : 'absolute',
                top : '150px',
                left : '350px',
                color : 'dimgray'
            }}>{aside1}</h2>
            <div id='secundary' className='secundary-aside'>
                <SecundaryAside aside1={aside1} />

            </div>


        </div>
    )
}

export default PrimaryAside