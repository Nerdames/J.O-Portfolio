import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Designs from './components/Designs';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Blogs />
      <Designs />
      <About />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
