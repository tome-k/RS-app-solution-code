import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import More from "./pages/More";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Footerr from "./components/Footerr";
// import Moree from "./pages/Moree";
// import Footer from "./components/Footer";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      {/* {window.location.pathname === "/" ? <Navbar /> : null} */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/more">
          <More title="title" />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footerr />
      {/* {window.location.pathname === "/" ? <Footerr /> : null} */}
    </BrowserRouter>
  );
}

export default App;
