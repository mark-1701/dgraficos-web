import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import Banner from './components/Banner';
import Message from './components/Message';
import Benefits from './components/Benefits';
import Footer from '../../components/layouts/Footer';
import Products from './components/Products';

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Products />
        <Message />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
