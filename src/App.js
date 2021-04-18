import {Switch, Route} from "react-router-dom";
//import {useState} from "react";
import './App.css';
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  //const [show, setShow]=useState(false)
  return (

  <main>
    <NavBar/>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
    </Switch>
    <Footer/>
  </main>
  );
}

export default App;
