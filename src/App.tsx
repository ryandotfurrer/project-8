import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Guidelines from './pages/Guidelines';
import FAQ from './pages/FAQ';
import MentorshipProgram from './pages/MentorshipProgram';
import AmbassadorProgram from './pages/AmbassadorProgram';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="guidelines" element={<Guidelines />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="mentorship" element={<MentorshipProgram />} />
          <Route path="ambassador" element={<AmbassadorProgram />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;