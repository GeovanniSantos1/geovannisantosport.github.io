import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Notfound from './pages/notFound/Notfound';
import ProjectCard from './pages/projectCard/ProjectCard';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectCard />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
