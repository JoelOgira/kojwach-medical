import { Routes, Route } from "react-router-dom";
import Footer from "./Navigation/Footer"
import Header from "./Navigation/Header";


const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
