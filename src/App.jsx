import { Routes, Route } from "react-router-dom";
import Footer from "./Navigation/Footer"
import Header from "./Navigation/Header";
import Home from "./Components/Home/Home";


const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
