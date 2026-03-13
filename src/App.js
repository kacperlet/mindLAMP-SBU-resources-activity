
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './components/HomePage';
import Article from './components/ArticlePage';
import Feedback from './components/FeedbackPage';
import ResourcePage from './components/ResourcePage';

function App() {
    return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="article/:articleName" element={<Article />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="resource/:id" element={<ResourcePage />} />
        </Routes>
    </HashRouter>
    );
}

export default App;