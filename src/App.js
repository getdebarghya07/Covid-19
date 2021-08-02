import "./App.css";
import Home from "./components/pages/Home";
import Hero from "./components/hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Refreshtotop from "./components/Refreshtotop";
import Footer from "./components/Footer";
import Buttons from "./components/btn";

function App() {
  return (
    <Router>
      <div className="App">
        <Hero />
        <Buttons />
        <Switch>
          <Route path="/Covid-19" exact component={Home} />
        </Switch>
        <Refreshtotop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
