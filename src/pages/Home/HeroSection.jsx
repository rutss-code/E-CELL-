import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="w-full bg-background-dark relative"
      style={{
        backgroundImage: "url('/images/img_.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-[56px] py-[132px]">
        <div className="flex flex-col justify-end items-center w-full">
          <h1
            className="text-[38px] sm:text-[50px] md:text-[60px] lg:text-5xl font-bold leading-[56px] sm:leading-[75px] md:leading-[89px] lg:leading-5xl text-left text-text-primary mt-[52px] shadow-[0px_4px_20px_#0000003f]"
            style={{ fontFamily: 'Oswald' }}
          >
            E-CELL DMCE
          </h1>

          <p
            className="text-[16px] sm:text-[20px] md:text-[26px] lg:text-xl font-bold leading-[21px] sm:leading-[26px] md:leading-[33px] lg:leading-md tracking-[5px] text-left text-text-light mt-[38px]"
            style={{ fontFamily: 'Oxygen' }}
          >
            DREAM.DARE.DEVELOP
          </p>

          <div className="relative w-full sm:w-[60%] md:w-[40%] lg:w-[20%] mt-[134px]">
            <div
              className="w-full h-[62px] rounded-lg border border-border-dark flex items-center justify-center"
              style={{
                background: 'linear-gradient(90deg, #8f0000c6 0%, #290000c6 100%)',
              }}
            >
              <span
                className="font-normal leading-[30px] md:leading-[28px] text-text-light whitespace-nowrap"
                style={{ fontFamily: 'Anton', fontSize: '1.5rem' }}
              >
                KNOW MORE
              </span>
              <img src="/images/img_arrow_1.svg" alt="Arrow" className="ml-0.5 w-[70px] h-[7px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
