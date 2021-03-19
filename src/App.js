import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from "./components/Slider";
import Philosophy from "./components/Philosophy";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <Navbar />
      <Slider />
      <Philosophy />
      <Hero />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
