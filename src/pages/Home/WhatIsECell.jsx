import React from 'react';
import useAnimatedCounter from '../../hooks/useAnimatedCounter';

const WhatIsECell = () => {
  const yearsCounter = useAnimatedCounter(10, 2000, '');
  const headsCounter = useAnimatedCounter(14, 2200, '');
  const membersCounter = useAnimatedCounter(100, 2500, '+');

  return (
    <section 
      className="w-full bg-background-dark relative"
      style={{
        backgroundImage: "url('/images/img_.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col justify-start items-center w-full">
          <h2 
            className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-4xl font-bold leading-[44px] sm:leading-[59px] md:leading-[74px] lg:leading-4xl text-center text-text-accent mt-[42px] shadow-[0px_4px_10px_#ee07073f]"
            style={{ fontFamily: 'Oswald' }}
          >
            WHAT IS E-CELL ?
          </h2>
          
          <p 
            className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-md font-semibold leading-[15px] sm:leading-[20px] md:leading-[24px] lg:leading-xl text-center text-text-light w-full max-w-[1176px] mt-[50px] px-4"
            style={{ fontFamily: 'Montserrat' }}
          >
            Entrepreneurship Cell (E-Cell) of Datta Meghe College of Engineering is a student-driven community dedicated to promoting innovation, creativity, and the spirit of entrepreneurship. It serves as a platform where students can learn, network, and turn ideas into successful ventures through workshops, competitions, mentorship, and industry collaborations.
          </p>
          
          <div 
            className="w-full border border-border-dark-opacity mt-[26px] px-[34px] py-[34px] shadow-[0px_4px_1px_#0000002c]"
            style={{
              background: 'linear-gradient(90deg, #8f0000b2 0%, #290000b2 100%)'
            }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start w-full max-w-[88%] mx-auto gap-8 sm:gap-0">
              <div className="text-center w-full sm:w-[20%]" ref={yearsCounter?.elementRef}>
                <p 
                  className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-3xl font-bold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-3xl text-text-light mb-[12px] transition-all duration-300"
                  style={{ fontFamily: 'Oxygen' }}
                >
                  {yearsCounter?.displayValue}<br />YEARS
                </p>
              </div>
              
              <div className="text-center w-full sm:w-[22%] self-center" ref={headsCounter?.elementRef}>
                <p 
                  className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-3xl font-bold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-3xl text-text-light transition-all duration-300"
                  style={{ fontFamily: 'Oxygen' }}
                >
                  {headsCounter?.displayValue}<br />HEADS
                </p>
              </div>
              
              <div className="text-center w-full sm:w-[22%] self-end" ref={membersCounter?.elementRef}>
                <p 
                  className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-3xl font-bold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-3xl text-text-light transition-all duration-300"
                  style={{ fontFamily: 'Oxygen' }}
                >
                  {membersCounter?.displayValue}<br />MEMBERS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsECell;