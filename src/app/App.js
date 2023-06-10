import Home from './pages/home/Home'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={< Home />} />
                <Route exact path="/test" element={< Home />} />
                <Route exact path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
