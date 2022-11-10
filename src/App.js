import logo from './logo.svg';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Mint from './components/Mint';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {

  return (
    <div className="App">
      <Router>
        <Header />
         <Routes>
                <Route path="/" element={<Home />} />
                <Route path="mint" element={<Mint />} />
         </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
