import React from 'react';

const AdvisorsSection = () => {
  return (
    <section className="w-full bg-background-dark">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col justify-start items-center w-full">
          <h2 
            className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-4xl font-bold leading-[44px] sm:leading-[59px] md:leading-[74px] lg:leading-4xl text-center text-text-accent mt-[160px]"
            style={{ fontFamily: 'Oswald' }}
          >
            E-CELL ADVISOR
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[70%] mt-[94px] mb-[10px] gap-8 sm:gap-0">
            <div 
              className="w-full sm:w-[44%] h-[650px] rounded-xl"
              style={{ background: 'linear-gradient(180deg, #8f0000 0%, #290000 100%)' }}
            ></div>
            
            <div 
              className="w-full sm:w-[44%] h-[650px] rounded-xl"
              style={{ background: 'linear-gradient(180deg, #8f0000 0%, #290000 100%)' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;