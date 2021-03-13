import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from "./components/Slider";

function App() {
  return (
    <Router>
      <Navbar />
      <Slider />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
