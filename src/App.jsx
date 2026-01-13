import './App.css';
import About from './components/About';
import BackgroundVideo from './components/BackgroundVideo';
import BlackHole from './components/BlackHole';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import Skill from './components/Skill';
function App() {
  return (
    <div className="relative min-h-screen bg-[#001f7c38] w-full h-full flex flex-col items-center ">
      {/* Background videos */}
      <BackgroundVideo />
      <BlackHole />
      {/* Content */}
      <Header />
      <Hero />
      <About/>
      <Project/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
