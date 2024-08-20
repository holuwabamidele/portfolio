import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Static/Header";
import Home from "./Pages/Home";
import Footer from "./Static/Footer";
import About from "./Pages/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
