import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';

function AppRouter() {
  return (
    <Router basename={process.env.NODE_ENV === 'development' ? '/' : '/Personal_Website'}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
