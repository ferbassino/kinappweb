import React from "react";
import Hero from "../../components/landing/header/Hero";
import Navbar from "../../components/landing/header/Navbar";
import Blocks from "../../components/landing/main/Blocks";
import Footer from "../../components/landing/footer/Footer";
import Statistics from "./statistics/Statistics";
import Payment from "./payment/Payment";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Statistics />
        {/* <Payment /> */}
        <Blocks />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Landing;
