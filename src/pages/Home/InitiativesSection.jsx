import React from 'react';

const InitiativesSection = () => {
  const initiatives = [
    {
      image: '/images/img_image_6.png',
      title: 'INCUBATION\nCELL',
      width: '146px',
      height: '130px',
      containerClass: 'w-full sm:w-[44%]',
      imageClass: 'w-[73px] sm:w-[110px] lg:w-[146px]',
      padding:
        'pt-[4px] sm:pt-[6px] lg:pt-[8px] pr-[4px] sm:pr-[6px] lg:pr-[8px] pb-[4px] sm:pb-[6px] lg:pb-[8px] pl-[4px] sm:pl-[6px] lg:pl-[8px]',
      margin:
        'mr-[14px] sm:mr-[21px] lg:mr-[28px] mb-[4px] sm:mb-[6px] lg:mb-[8px] ml-[14px] sm:ml-[21px] lg:ml-[28px]',
    },
    {
      image: '/images/img_image_6_172x142.png',
      title: 'NEC',
      width: '142px',
      height: '172px',
      containerClass: 'w-full sm:w-[44%]',
      imageClass: 'w-[71px] sm:w-[107px] lg:w-[142px]',
      padding: 'pr-[28px] sm:pr-[42px] lg:pr-[56px] pl-[28px] sm:pl-[42px] lg:pl-[56px]',
      margin: 'mb-[25px] sm:mb-[38px] lg:mb-[50px]',
      titleMargin: 'mt-[-9px] sm:mt-[-14px] lg:mt-[-18px]',
    },
    {
      image: '/images/img_image_6_120x106.png',
      title: 'ALUMINI',
      width: '106px',
      height: '120px',
      containerClass: 'w-full sm:w-[44%]',
      imageClass: 'w-[53px] sm:w-[80px] lg:w-[106px]',
      padding:
        'pt-[13px] sm:pt-[20px] lg:pt-[26px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[13px] sm:pb-[20px] lg:pb-[26px] pl-[54px] sm:pl-[81px] lg:pl-[108px]',
      margin: 'mb-[16px] sm:mb-[24px] lg:mb-[32px]',
      imageAlign: 'self-center',
    },
    {
      image: '/images/img_image_6_120x120.png',
      title: 'ENSPIRE',
      width: '120px',
      height: '120px',
      containerClass: 'w-full sm:w-[44%]',
      imageClass: 'w-[60px] sm:w-[90px] lg:w-[120px]',
      padding:
        'pt-[13px] sm:pt-[20px] lg:pt-[26px] pr-[13px] sm:pr-[20px] lg:pr-[26px] pb-[13px] sm:pb-[20px] lg:pb-[26px] pl-[13px] sm:pr-[20px] lg:pl-[26px]',
      margin: 'mb-[16px] sm:mb-[24px] lg:mb-[32px]',
      titleAlign: 'self-end',
    },
  ];

  return (
    <section className="w-full bg-background-primary">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[52px] py-[26px] sm:py-[39px] lg:py-[52px]">
        <div className="flex flex-col gap-[44px] sm:gap-[66px] lg:gap-[88px] justify-start items-center w-full">
          {/* Section Title */}
          <h2
            className="text-[30px] sm:text-[45px] lg:text-3xl font-oswald font-bold leading-[44px] sm:leading-[66px] lg:leading-3xl text-left text-text-accent w-auto"
            style={{
              textShadow: '0px 4px 10px rgba(238, 7, 7, 0.25)',
              filter: 'drop-shadow(0px 4px 10px rgba(238, 7, 7, 0.25))',
            }}
          >
            OUR INITIATIVES
          </h2>

          {/* Initiatives Grid */}
          <div className="w-full max-w-[886px] mb-[38px] sm:mb-[57px] lg:mb-[76px]">
            <div className="flex flex-col gap-[25px] sm:gap-[38px] lg:gap-[50px] justify-start items-center w-full">
              {/* First Row */}
              <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0">
                {/* Incubation Cell */}
                <div className={initiatives?.[0]?.containerClass}>
                  <div className="flex flex-row justify-center items-center w-full">
                    <div
                      className={`flex flex-col justify-start items-center w-full border border-border-primary rounded-xl ${initiatives?.[0]?.padding} ${initiatives?.[0]?.margin}`}
                      style={{
                        background: 'linear-gradient(180deg, #8f0000 0%, #290000 100%)',
                      }}
                    >
                      <img
                        src={initiatives?.[0]?.image}
                        alt="Incubation Cell"
                        className={`${initiatives?.[0]?.imageClass} h-auto`}
                      />
                      <h3 className="text-[16px] sm:text-[24px] lg:text-xl font-instrument font-bold leading-[21px] sm:leading-[32px] lg:leading-[43px] tracking-[0.5px] sm:tracking-[0.75px] lg:tracking-sm text-center uppercase text-text-light mt-2 sm:mt-3 lg:mt-4">
                        {initiatives?.[0]?.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* NEC */}
                <div className={initiatives?.[1]?.containerClass}>
                  <div className="flex flex-row justify-center items-start w-full">
                    <div
                      className={`flex flex-col justify-start items-center w-full border border-border-primary rounded-xl ${initiatives?.[1]?.padding} ${initiatives?.[1]?.margin}`}
                      style={{
                        background: 'linear-gradient(180deg, #8f0000 0%, #290000 100%)',
                      }}
                    >
                      <img
                        src={initiatives?.[1]?.image}
                        alt="NEC"
                        className={`${initiatives?.[1]?.imageClass} h-auto`}
                      />
                      <h3
                        className={`text-[16px] sm:text-[24px] lg:text-xl font-instrument font-bold leading-[20px] sm:leading-[30px] lg:leading-[40px] tracking-[1.5px] sm:tracking-[2.25px] lg:tracking-md text-left uppercase text-text-light ${initiatives?.[1]?.titleMargin || ''}`}
                      >
                        {initiatives?.[1]?.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0">
                {/* Alumni */}
                <div className={initiatives?.[2]?.containerClass}>
                  <div
                    className={`flex flex-col justify-start items-start w-full border border-border-primary rounded-xl ${initiatives?.[2]?.padding}`}
                    style={{
                      background: 'linear-gradient(180deg, #8f0000 0%, #290000 100%)',
                    }}
                  >
                    <img
                      src={initiatives?.[2]?.image}
                      alt="Alumni"
                      className={`${initiatives?.[2]?.imageClass} h-auto ${initiatives?.[2]?.imageAlign || ''}`}
                    />
                    <h3
                      className={`text-[16px] sm:text-[24px] lg:text-xl font-instrument font-bold leading-[20px] sm:leading-[30px] lg:leading-[40px] tracking-[1.5px] sm:tracking-[2.25px] lg:tracking-md text-left uppercase text-text-light w-auto ${initiatives?.[2]?.margin}`}
                    >
                      {initiatives?.[2]?.title}
                    </h3>
                  </div>
                </div>

                {/* Enspire */}
                <div className={initiatives?.[3]?.containerClass}>
                  <div
                    className={`flex flex-col justify-start items-center w-full border border-border-primary rounded-xl ${initiatives?.[3]?.padding}`}
                    style={{
                      background: 'linear-gradient(180deg, #8f0000 0%, #290000 100%)',
                    }}
                  >
                    <img
                      src={initiatives?.[3]?.image}
                      alt="Enspire"
                      className={`${initiatives?.[3]?.imageClass} h-auto`}
                    />
                    <h3
                      className={`text-[16px] sm:text-[24px] lg:text-xl font-instrument font-bold leading-[20px] sm:leading-[30px] lg:leading-[40px] tracking-[1.5px] sm:tracking-[2.25px] lg:tracking-md text-left uppercase text-text-light w-auto ${initiatives?.[3]?.titleAlign || ''} ${initiatives?.[3]?.margin}`}
                    >
                      {initiatives?.[3]?.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
// import React, { useEffect, useRef, useState } from 'react';
