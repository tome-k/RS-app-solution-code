import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Slider from "./components/Slider";
import Philosophy from "./components/Philosophy";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Slider />
      <Philosophy />
      <Hero />
      <Switch>
        <Route path="/more" exact component />
        <Route path="/about" component />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
