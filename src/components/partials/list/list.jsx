import React, { useEffect } from 'react';
import { InputIcon } from '../../form/components/Input/Input';
import icoSearch from '../../svg/icoSearch.svg'
import './style.css'
import { BASE_URL } from '../../form/Form';

export const PizzaList = () => {
    const [name, setName] = React.useState('')

    return (
        <div className='body-translate'>
            <div className='content-list'>
                <header className='header-search'>
                    <h3>Listar Pizza</h3>
                    <InputIcon classCon={"content-input-icon"} classN={"input-icon"}  type={"search"} img={icoSearch} name={"categoria"} placeHolder={"Pesquisar categoria"} id={"1"}  value={name} setValue={setName}  />
                </header>
                <div className='list'>
                    <header class="header-data">
                        <span className='txt-list'>ID</span>
                        <span className='txt-list'>Nome</span>
                        <span className='txt-list'>Preço</span>
                        <span className='txt-list'>Status</span>
                        <span className='txt-list'>Data</span>
                    </header>
                    <div class="list-data">
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />
                        <TDPizza id={'abs3-m4-fjg5m-f58f-fgg'} name={'Pizza Margarine'} price={'5000Kz'} status={'Disponivel'} Date={'2020-04-05'} />

                    </div>
                </div>

            </div>
        </div>
    )
}

export const CategoryList = () => {
    const [name, setName] = React.useState('')
    const [categories, setCategories] = React.useState([])
    useEffect(() => {
        fetch(BASE_URL + "/admin/selects/get-categories",
        {
            method: "GET",
            headers : {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then((response) => {
            if(response.data.length != 0)
            {
                setCategories(() => response.data)
                console.log(categories)
                
            }
            else {
                setCategories(() => ['Nenhuma categoria disponível'])
            }
        })
    }, [])
     return (
        <div className='body-translate'>
            <div className='content-list'>
                <header className='header-search'>
                    <h3>Listar categoria</h3>
                    <InputIcon classCon={"content-input-icon"} classN={"input-icon"}  type={"search"} img={icoSearch} name={"categoria"} placeHolder={"Pesquisar categoria"} id={"1"}  value={name} setValue={setName}  />
                </header>
                <div className='list'>
                    <header class="header-data">
                        <span className='txt-list'>ID</span>
                        <span className='txt-list'>Nome</span>
                        <span className='txt-list'>Status</span>
                        <span className='txt-list'>Data</span>
                    </header>
                    <div class="list-data">
                        {categories.map(category => <TDCategory id={category.ID} name={category.NAME} status={'Disponivel'} Date={category.createdAt} />)}

                    </div>
                </div>
            </div>
        </div>
    )
}

const TDPizza = ({ id, name, price, status, Date }) => {
    return (
        <button id={id} class="row-data">
            <span id={id} className='txt-list'>{id}</span>
            <span id={id} className='txt-list'>{name}</span>
            <span id={id} className='txt-list'>{price}</span>
            <span id={id} className='txt-list'>{status}</span>
            <span id={id} className='txt-list'>{Date}</span>
        </button>
    )
}

const TDCategory = ({ id, name, status, Date }) => {
    return (
        <button id={id} class="row-data">
            <span id={id} className='txt-list'>{id}</span>
            <span id={id} className='txt-list'>{name}</span>
            <span id={id} className='txt-list'>{status}</span>
            <span id={id} className='txt-list'>{Date}</span>
        </button>
    )
}