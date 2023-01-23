import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LifeSheet from '../pages/LifeSheet'

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/LifeSheet/" element={<LifeSheet/>} />
            </Routes>
        </BrowserRouter>
     );
}

export default App;