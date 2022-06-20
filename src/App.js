import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";


export default function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <About></About>
      <Footer></Footer>
    </>
  );
}
