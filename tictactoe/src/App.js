import React, { useEffect }  from 'react'
import Game from './components/game' 

const App = () => {
    
    useEffect(() => {
        document.title = "My React Tic Tac Toe"
    }, [])

    return <Game/> 
}
export default App;