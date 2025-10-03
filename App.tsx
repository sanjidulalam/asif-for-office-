import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Issues from './components/Issues';
import CallToAction from './components/CallToAction';
import About from './components/About';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="bg-campaign-dark text-campaign-light font-sans">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Issues />
        <About />
        <Gallery />
        <CallToAction />
        <AIAssistant />
      </main>
      <Footer />
    </div>
  );
};

export default App;