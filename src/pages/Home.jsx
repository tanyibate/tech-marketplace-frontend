import React from "react";
import Hero from "../components/hero/Hero";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <p onClick={() => (window.location.href = "http://google.com")}>123</p>
      <div className="bg-silver">
        <h1 className="text-3xl">hello</h1>
      </div>
    </Layout>
  );
}
