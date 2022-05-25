import Main from './pages/Main';
import Projects from './pages/projects';
import Dashboard from './pages/dashboard';
import ProjectPage from './pages/projectPage';
import News from './pages/news';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Main/>} />
            <Route path="/projects" element={<Projects/>} exact />
            <Route path="/dashboard" element={<Dashboard/>} exact />
            <Route path="/projectPage" element={<ProjectPage/>} exact />
            <Route path="/news" element={<News/>} exact />
            </Routes>
        </BrowserRouter>
    );
}

export default App
