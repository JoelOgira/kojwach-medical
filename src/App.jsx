import { Routes, Route } from "react-router-dom";
import Footer from "./Navigation/Footer"
import Header from "./Navigation/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";


const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
