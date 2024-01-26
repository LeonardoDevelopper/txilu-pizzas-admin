import React from 'react';
import { FormCreateCategory, FormCreatePizza } from '../../form/Form';
import { CategoryList, PizzaList } from '../list/list';

const BodyData = ({aside2, data}) => {
    if(aside2 == 'Cadastrar')
    {
        return (
            <div className='body'>
                {data == 'Categoria' ? <FormCreateCategory /> : <FormCreatePizza /> }
                
            </div>
        )

    }
    else if(aside2 = 'Listar')
    {
        return (
            <div className='body'>
                {data == 'Categoria' ? <CategoryList /> : <PizzaList /> }
                
            </div>
        )
    }
}

export default BodyData