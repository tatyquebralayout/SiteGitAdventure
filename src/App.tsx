import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Worlds } from './components/Worlds';
import { Map } from './components/Map';
import { Timeline } from './components/Timeline';
import { Festivals } from './components/Festivals';
import { Philosophy } from './components/Philosophy';
import { Rituals } from './components/Rituals';
import { Stories } from './components/Stories';
import { Legends } from './components/Legends';
import { Society } from './components/Society';
import { Creator } from './components/Creator';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <div id="hero">
          <Hero />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="worlds">
          <Worlds />
        </div>
        <div id="map">
          <Map />
        </div>
        <div id="timeline">
          <Timeline />
        </div>
        <div id="festivals">
          <Festivals />
        </div>
        <div id="philosophy">
          <Philosophy />
        </div>
        <div id="rituals">
          <Rituals />
        </div>
        <div id="stories">
          <Stories />
        </div>
        <div id="legends">
          <Legends />
        </div>
        <div id="society">
          <Society />
        </div>
        <div id="creator">
          <Creator />
        </div>
        <div id="blog">
          <Blog />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="cta">
          <CallToAction />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;