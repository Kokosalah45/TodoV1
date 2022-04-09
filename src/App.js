import React from 'react'
import Header from './components/Header'
import Todo from './components/Todo'
import MainHeader from './components/MainHeader'

function App() {
    return (
        <div className="App">
            <MainHeader />
            <Header text={'Todos'} />
            <Todo />
        </div>
    )
}

export default App
