import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './api/server'
import { TodoContextProvider as TCDP } from './contexts/TodoContextProvider'

ReactDOM.render(
    <React.StrictMode>
        <TCDP>
            <App />
        </TCDP>
    </React.StrictMode>,
    document.getElementById('root')
)
