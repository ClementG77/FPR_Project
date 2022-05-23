import Main from './pages/Main';
import Projects from './pages/projects';
import Dashboard from './pages/dashboard'
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Main/>} />
            <Route path="/projects" element={<Projects/>} exact />
            <Route path="/dashboard" element={<Dashboard/>} exact />
            </Routes>
        </BrowserRouter>
    );
}

export default App
