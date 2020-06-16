import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ContactUs from "./components/ContactUs";
import RickMorty from "./components/RickMorty";
import "./App.less";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Route exact path="/" component={Dashboard} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/rick-morty" component={RickMorty} />
      </BrowserRouter>
    </div>
  );
}

export default App;
