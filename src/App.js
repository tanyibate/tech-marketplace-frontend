import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import User from "./pages/User";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import CategoryPage from "./pages/category-page/CategoryPage";
import Home from "./pages/Home/Home";
import React, { useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import BestAudioGear from "./components/best-audio-gear/BestAudioGear";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar></NavBar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/category/:category">
            <CategoryPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <BestAudioGear></BestAudioGear>
        <Footer></Footer>
      </Router>
    </QueryClientProvider>
  );
}

function About() {
  return <h2>About</h2>;
}
