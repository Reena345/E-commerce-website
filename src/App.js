
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HeroSection from './Component/hero/heroSection';
import Header from './Component/header/header';
import Products from './Products/Products';


function App() {
  return (
    <>
    <Header  />
    <HeroSection />
    <Products />
    
    </>
  );
}

export default App;
