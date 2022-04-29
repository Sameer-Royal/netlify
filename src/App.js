import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Component1';
import Brand from './component2';
import Component3 from './component3';
import Component4 from './component4';
import Component5 from './component5';
import Component6 from './component6';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Brand />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Footer />
    </>
  );
}

export default App;
