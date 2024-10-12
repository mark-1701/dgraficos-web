import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import Banner from './components/Banner';
import Message from './components/Message';
import Benefits from './components/Benefits';
import Footer from '../../components/layouts/Footer';

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Message />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
