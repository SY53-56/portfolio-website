import './App.css';
import About from './components/About';
import BackgroundVideo from './components/BackgroundVideo';
import Blackhole from './components/BlackHole';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import Skill from './components/Skill';
function App() {
  return (
    <div className="relative min-h-screen bg-[#001f7c38] w-full h-full flex flex-col items-center ">
      {/* Background videos */}
      <BackgroundVideo />
      <Blackhole />
      {/* Content */}
      <Header />
      <Hero />
      <About/>
      <Project/>
      <Skill/>
    </div>
  );
}

export default App;
