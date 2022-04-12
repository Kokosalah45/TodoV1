import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './features/store'
import './api/server'
import { TodoContextProvider as TCDP } from './contexts/TodoContextProvider'

ReactDOM.render(

    <React.StrictMode>
        <Provider store={store}>
            <TCDP>
                <App />
            </TCDP>
        </Provider>
        
    </React.StrictMode>,
    document.getElementById('root')
)
