import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AutoCarosel from '../../components/AutoCarosel';
import Infomation from '../../components/Infomation';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <AutoCarosel />
      <Infomation />
      <Footer />
    </>
  );
};

export default Home;
