import React from 'react'
import ReactDom from 'react-dom'
import { Primeiro, Segundo } from './componente'
import Silva from './silva'
import Familia from './familia'
import Member from './member'
import ClassComponent from './classComponent';
import Field from './field'

//ReactDom.render(<h1>Olá React2</h1>, document.getElementById('app'))
ReactDom.render(
    <div>
        <Primeiro />
        <Segundo />
        <Silva />
        <Familia lastName='Germano'>
            <Member name='Poliana' />
            <Member name='Felipe' />
            <Member name='Marvim' />
        </Familia>
        <ClassComponent label='Contador' initialValue={10} />
        <Field initialValue='Teste' />
    </div>
    
    , document.getElementById('app'))