import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Hero,
  Experience,
  Feedbacks,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from '../src/components';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Experience />
        
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div><Feedbacks />
      </div>
    </BrowserRouter>
  );
}

export default App;
