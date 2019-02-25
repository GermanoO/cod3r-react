import React from 'react'
import ReactDom from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
    field: fieldReducer
})

//ReactDom.render(<h1>Olá React2</h1>, document.getElementById('app'))
ReactDom.render(
        <Provider store={createStore(reducers)}>
            <Field initialValue='Teste' />
        </Provider>
    , document.getElementById('app'))