import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Features } from './components/Features';
import { Services } from './components/services/Services';
import { Contact } from './components/Contact';
import { FeedbackForm } from './components/feedback/FeedbackForm';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Features />
        <Services />
        <Contact />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;