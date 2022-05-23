import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import CategoryPage from "./pages/category-page/CategoryPage";
import Home from "./pages/home/Home";
import React from "react";

import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import BestAudioGear from "./components/best-audio-gear/BestAudioGear";
import { QueryClient, QueryClientProvider } from "react-query";
import Product from "./pages/product/Product";

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
          <Route path="/product/:slug">
            <Product />
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
