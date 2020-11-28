import React from "react";
// import logo from './logo.svg';

import "./App.css";
import { Route } from "react-router-dom";

// import Home from "./Home";
import Home from "./home/Home";


// import PageNotFound from './PageNotFound';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/MainProducts";
import Contact from "./components/Contact";
import AccordionMain from "./components/AccordionMain";
import ShowHide from "./components/ShowHide";
import SlickSlider from "./components/SlickSlider";
import SanityPage from "./SanityPage";

function App() {

  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <div className="parent-container">
        <Route exact path="/" component={Home} />

        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/accordion" component={AccordionMain} />
        <Route exact path="/showhide" component={ShowHide} />
        <Route exact path="/SlickSlider" component={SlickSlider} />
        <Route exact path="/sanity" component={SanityPage} />

        {/* <SlickSlider /> */}


        {/* <Route component={PageNotFound} /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
