import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    {
      src: "/images/img_si_uk_2.png",
      alt: "SI UK",
      width: "146px",
      height: "66px",
      padding: "pt-[66px] pr-[26px] pb-[66px] pl-[26px]"
    },
    {
      src: "/images/img_paradise_group_2.png",
      alt: "Paradise Group",
      width: "160px",
      height: "66px",
      padding: "pt-[66px] pr-[18px] pb-[66px] pl-[18px]"
    },
    {
      src: "/images/img_upgrad_1.png",
      alt: "UpGrad",
      width: "152px",
      height: "152px",
      padding: "pt-[16px] pr-[16px] pb-[16px] pl-[16px]",
      borderRadius: "rounded-md",
      marginTop: "mt-[12px]"
    },
    {
      src: "/images/img_krawl_1.png",
      alt: "Krawl",
      width: "152px",
      height: "152px",
      padding: "pt-[22px] pr-[22px] pb-[22px] pl-[22px]",
      borderRadius: "rounded-md"
    },
    {
      src: "/images/img_clothing_1.png",
      alt: "Clothing",
      width: "140px",
      height: "152px",
      padding: "pt-[22px] pr-[22px] pb-[22px] pl-[22px]",
      borderRadius: "rounded-md"
    }
  ];

  return (
    <section className="w-full bg-background-dark">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col justify-start items-center w-full">
          <h2 
            className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-4xl font-bold leading-[44px] sm:leading-[59px] md:leading-[74px] lg:leading-4xl text-left text-text-accent mt-[212px]"
            style={{ fontFamily: 'Oswald' }}
          >
            OUR SPONSORS
          </h2>
          
          <div className="flex flex-wrap justify-center items-start gap-[45px] sm:gap-[90px] w-full mt-[114px] mx-[42px] lg:mx-0 px-4 sm:px-0">
            {sponsors?.map((sponsor, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-center w-[200px] h-auto rounded-2xl shadow-[0px_4px_4px_#d81c1e] ${sponsor?.padding}`}
                style={{ background: 'linear-gradient(228deg, #460505 0%, #ac0d0d 100%)' }}
              >
                <img 
                  src={sponsor?.src}
                  alt={sponsor?.alt}
                  className={`${sponsor?.borderRadius || 'rounded-sm'} ${sponsor?.marginTop || ''}`}
                  style={{ 
                    width: sponsor?.width, 
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;