
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import Article from './components/ArticlePage';
import Feedback from './components/FeedbackPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="article/:articleName" element={<Article />} />
                <Route path="feedback" element={<Feedback />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;