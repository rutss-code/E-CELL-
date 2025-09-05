import React from 'react';

const SpeakersSection = () => {
  return (
    <section className="w-full bg-background-dark">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col justify-start items-center w-full">
          <h2 
            className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-4xl font-bold leading-[44px] sm:leading-[59px] md:leading-[74px] lg:leading-4xl text-center text-text-accent mt-[286px]"
            style={{ fontFamily: 'Oswald' }}
          >
            OUR PREVIOUS SPEAKERS
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;