import React, { useEffect } from 'react';
import './style.css'
import { ButtonAside2, ButtonNav, ButtonNavigate } from '../../form/components/Button/Button';
import icoCreate from '../../svg/ico-add-pizza.svg'
import { FormCreateCategory, FormCreatePizza } from '../../form/Form';
import BodyData from '../bodyData/BodyData';
const SecundaryAside = ({aside1}) => {
    const [aside2, setAside2] = React.useState('Cadastrar')
    const [data, setData] = React.useState('Categoria')
    if(aside1 == 'Home')
    {
        return (
            <aside id='data' className='data'>
                
                
            </aside>
        )
    }
    else if(aside1 == 'Operações')
    {
        return (
            <aside className='aside2'>
                <div style={{marginTop : '120px'}}></div>
                <ButtonAside2 fun={setAside2} selected={true} text={'Cadastrar'} src={icoCreate}  />
                <ButtonAside2 fun={setAside2} selected={false} text={'Listar'} src={icoCreate}  />
                <ButtonAside2 fun={setAside2} selected={false} text={'Editar'} src={icoCreate}  />

                <aside id='data' className='data'>
                    <header className='data-header'>
                        <ButtonNav fun={setData} selected={true} text={'Categoria'} />
                        <ButtonNav fun={setData} text={'Pizza'} />
                    </header>
                    <BodyData aside2={aside2} data={data} />
                    
                
                </aside>
            </aside>
        )
    }
    // else if()
    // {
    //     return (
    //         <aside>
                
    //         </aside>
    //     )
    // }
    
}

export default SecundaryAside