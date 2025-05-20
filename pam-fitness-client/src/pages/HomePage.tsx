import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import Features from '../components/Features';
import About from '../components/About';
import Banner from '../components/Banner';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Banner/>
      <CallToAction/>
      <Features/>
      <About/>
      <JoinUs/>
      <Footer/>
    </>
  )
}

export default HomePage;