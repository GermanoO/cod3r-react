import React from 'react'
import ReactDom from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './counterReducer'
import Counter from './counter'

const reducers = combineReducers({
    counter: counterReducer
})

//ReactDom.render(<h1>Olá React2</h1>, document.getElementById('app'))
ReactDom.render(
        <Provider store={createStore(reducers)}>
            <Counter />
        </Provider>
    , document.getElementById('app'))