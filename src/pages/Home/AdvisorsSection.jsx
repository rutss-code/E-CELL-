import React from 'react';

const AdvisorsSection = () => {
  const advisors = [
    {
      id: 1,
      image: "/images/img_rectangle_56_310x292.png",
      name: "Proff. Anand Joshi",
      width: "292px",
      height: "310px",
      bgWidth: "334px",
      bgHeight: "328px",
      containerWidth: "450px",
      padding: "pt-[53px] sm:pt-[80px] lg:pt-[106px] pr-[28px] sm:pr-[42px] lg:pr-[56px] pb-[53px] sm:pb-[80px] lg:pb-[106px] pl-[28px] sm:pl-[42px] lg:pl-[56px]",
      imageMargin: "mt-[8px] sm:mt-[12px] lg:mt-[16px]",
      nameMargin: "mb-[18px] sm:mb-[27px] lg:mb-[36px]"
    },
    {
      id: 2,
      image: "/images/img_deepali_mam_removebg_preview.png",
      name: "Proff. Deepali Kadam",
      width: "254px",
      height: "308px",
      bgWidth: "334px",
      bgHeight: "326px",
      containerWidth: "450px",
      padding: "pt-[53px] sm:pt-[80px] lg:pt-[106px] pr-[26px] sm:pr-[39px] lg:pr-[52px] pb-[53px] sm:pb-[80px] lg:pb-[106px] pl-[26px] sm:pl-[39px] lg:pl-[52px]",
      imageMargin: "mt-[8px] sm:mt-[12px] lg:mt-[16px]",
      nameMargin: "mb-[18px] sm:mb-[27px] lg:mb-[36px]"
    }
  ];

  return (
    <section className="w-full bg-background-primary py-[30px] sm:py-[45px] lg:py-[60px] mb-[25px] sm:mb-[38px] lg:mb-[50px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col gap-[27px] sm:gap-[41px] lg:gap-[54px] justify-start items-center w-full">
          
          {/* Section Title */}
          <h2 className="text-[30px] sm:text-[45px] lg:text-3xl font-oswald font-bold leading-[44px] sm:leading-[67px] lg:leading-3xl text-center text-text-accent w-auto">
            E-CELL ADVISOR
          </h2>

          {/* Advisors Grid */}
          <div className="flex flex-col lg:flex-row gap-[52px] sm:gap-[78px] lg:gap-[104px] w-full max-w-[1004px] justify-center items-center">
            
            {advisors?.map((advisor) => (
              <div 
                key={advisor?.id}
                className={`flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-center items-center w-full max-w-[${advisor?.containerWidth}]`}
              >
                {/* Image Container */}
                <div 
                  className={`flex flex-row justify-center items-end w-auto ${advisor?.padding}`}
                  style={{ 
                    background: 'linear-gradient(180deg, #8f0000 0%, #290000 100%)',
                    borderRadius: '40px'
                  }}
                >
                  <div 
                    className={`flex justify-center items-center w-full max-w-[${advisor?.bgWidth}] h-[${advisor?.bgHeight}] px-[8px] sm:px-[12px] lg:px-[16px]`}
                    style={{ backgroundColor: '#222020' }}
                  >
                    <img 
                      src={advisor?.image}
                      alt={advisor?.name}
                      className={`w-full max-w-[${advisor?.width}] h-auto object-cover ${advisor?.imageMargin}`}
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className={`text-[16px] sm:text-[24px] lg:text-xl font-oswald font-bold leading-[24px] sm:leading-[35px] lg:leading-[47px] text-left text-text-light w-auto ${advisor?.nameMargin}`}>
                  {advisor?.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;