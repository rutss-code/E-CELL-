import React from 'react';

const InitiativesSection = () => {
  const initiatives = [
    {
      title: "INCUBATION\nCELL",
      gradient: "linear-gradient(180deg, #8f0000 0%, #290000 100%)"
    },
    {
      title: "NEC",
      gradient: "linear-gradient(180deg, #8f0000 0%, #290000 100%)"
    },
    {
      title: "ALUMINI",
      gradient: "linear-gradient(180deg, #8f0000 0%, #290000 100%)"
    },
    {
      title: "ENSPIRE",
      gradient: "linear-gradient(180deg, #8f0000 0%, #290000 100%)"
    }
  ];

  return (
    <section className="w-full bg-background-dark">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col justify-start items-center w-full">
          <h2 
            className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-4xl font-bold leading-[44px] sm:leading-[59px] md:leading-[74px] lg:leading-4xl text-left text-text-accent mt-[44px] shadow-[0px_4px_10px_#ee07073f]"
            style={{ fontFamily: 'Oswald' }}
          >
            OUR INITIATIVES
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[66px] w-full max-w-[886px] mt-[44px] mx-[286px] lg:mx-0">
            {initiatives?.map((initiative, index) => (
              <div
                key={index}
                className="flex justify-center items-end w-full border border-border-dark rounded-xl p-[26px] sm:p-[42px] md:p-[48px]"
                style={{ background: initiative?.gradient }}
              >
                <p 
                  className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-2xl font-bold leading-[24px] sm:leading-[32px] md:leading-[40px] lg:leading-2xl tracking-[1px] sm:tracking-[4px] text-center uppercase text-text-light mt-[96px] sm:mt-[108px]"
                  style={{ fontFamily: 'Instrument Sans' }}
                >
                  {initiative?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;