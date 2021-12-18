import './App.scss';
import Header from './components/header';
import Hero from './components/hero';
import MainSection from './components/main-section';
import FeaturdProductsList from './components/featured-products-list';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
      <FeaturdProductsList />
    </div>
  );
}

export default App;
