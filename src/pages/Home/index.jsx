import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import WhatIsECell from './WhatIsECell';
import InitiativesSection from './InitiativesSection';
import SponsorsSection from './SponsorsSection';
import SpeakersSection from './SpeakersSection';
import TeamSection from './TeamSection';
import AdvisorsSection from './AdvisorsSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>E-CELL DMCE | Entrepreneurship Cell - Dream, Dare, Develop</title>
        <meta
          name="description"
          content="Official website of E-CELL DMCE - 10 years of fostering innovation and entrepreneurship at Datta Meghe College of Engineering. Join our community of 100+ members, explore incubation programs, NEC initiatives, and connect with industry mentors."
        />
        <meta property="og:title" content="E-CELL DMCE | Entrepreneurship Cell - Dream, Dare, Develop" />
        <meta property="og:description" content="Official website of E-CELL DMCE - 10 years of fostering innovation and entrepreneurship at Datta Meghe College of Engineering. Join our community of 100+ members, explore incubation programs, NEC initiatives, and connect with industry mentors." />
      </Helmet>

      <div className="w-full bg-background-dark overflow-x-hidden">
        <Header className="" />
        
        <main>
          <HeroSection />
          <WhatIsECell />
          <InitiativesSection />
          <SponsorsSection />
          <SpeakersSection />
          <TeamSection />
          <AdvisorsSection />
        </main>
        
        <Footer className="" />
      </div>
    </>
  );
};

export default Home;