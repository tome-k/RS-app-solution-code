import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import More from "./pages/More";
import About from "./pages/About";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Footer_2 from "./components/Footer_2";

function App(props) {
  return (
    <BrowserRouter>
      {window.location.pathname === "/" ? <Navbar /> : null}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/more">
          <More />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {window.location.pathname === "/" ? <Footer_2 /> : null}
    </BrowserRouter>
  );
}

export default App;
