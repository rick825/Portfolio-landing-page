import HeroSection from './components/HeroSection';
import './App.css';
import Services from './components/Services/Services';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Feature from './components/feature/Feature';
import Testimonial from './components/Testimonials/Testimonial';
import Footer from './components/Footer/Footer';
import ContactUs from './components/Contactus/Contactus';


function App() {
  return (
    <div className="app">
      <HeroSection />
      <Services />
      <About />
      {/* <Portfolio /> */}
      <Feature />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
