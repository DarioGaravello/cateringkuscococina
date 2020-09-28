import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, About, Contact, Home, Images, NotPageFound, Service, Footer } from "./components";
import "bootswatch/dist/lux/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery/images" component={Images} />
        <Route path="/service" component={Service} />
        <Route component={NotPageFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
