import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image: '/images/img_sameer_sir_removebg_preview.png',
      name: 'Late Mr. Sameer Ekbote',
      width: '170px',
      height: '208px',
      bgWidth: '228px',
      bgHeight: '192px',
      containerWidth: '320px',
      padding:
        'pt-[18px] sm:pt-[27px] lg:pt-[36px] pr-[9px] sm:pr-[14px] lg:pr-[18px] pb-[18px] sm:pb-[27px] lg:pb-[36px] pl-[9px] sm:pl-[14px] lg:pl-[18px]',
      imageMargin: 'mr-[13px] sm:mr-[20px] lg:mr-[26px] ml-[13px] sm:ml-[20px] lg:ml-[26px]',
      nameMargin: 'mb-[7px] sm:mb-[11px] lg:mb-[14px]',
    },
    {
      id: 2,
      image: '/images/img_rectangle_56_184x200.png',
      name: 'Dr. Aruna Henry',
      width: '200px',
      height: '184px',
      bgWidth: '228px',
      bgHeight: '192px',
      containerWidth: '320px',
      padding:
        'pt-[22px] sm:pt-[33px] lg:pt-[44px] pr-[20px] sm:pr-[30px] lg:pr-[40px] pb-[22px] sm:pb-[33px] lg:pb-[44px] pl-[20px] sm:pl-[30px] lg:pl-[40px]',
      imageMargin: 'ml-[5px] sm:ml-[8px] lg:ml-[10px]',
      nameMargin: 'mb-[3px] sm:mb-[5px] lg:mb-[6px]',
    },
    {
      id: 3,
      image: '/images/img_rectangle_61.png',
      name: 'Dr. Meghana Chatterjee',
      width: '172px',
      height: '176px',
      bgWidth: '228px',
      bgHeight: '192px',
      containerWidth: '310px',
      padding:
        'pt-[21px] sm:pt-[32px] lg:pt-[42px] pr-[4px] sm:pr-[6px] lg:pr-[8px] pb-[21px] sm:pb-[32px] lg:pb-[42px] pl-[4px] sm:pl-[6px] lg:pl-[8px]',
      imageMargin: 'mt-[8px] sm:mt-[12px] lg:mt-[16px]',
    },
  ];

  return (
    <section className="w-full bg-background-primary">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px] py-[30px] sm:py-[45px] lg:py-[60px]">
        <div className="flex flex-col gap-[80px] sm:gap-[120px] lg:gap-[160px] justify-start items-center w-full">
          {/* Team Section */}
          <div className="flex flex-col gap-[13px] sm:gap-[20px] lg:gap-[26px] justify-start items-center w-full max-w-[1210px]">
            {/* Section Title */}
            <h2 className="text-[30px] sm:text-[45px] lg:text-3xl font-oswald font-bold leading-[44px] sm:leading-[67px] lg:leading-3xl text-center text-text-accent w-auto">
              E-CELL'S BACKBONE
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[23px] lg:text-lg font-montserrat font-bold leading-[18px] sm:leading-[27px] lg:leading-xl text-center text-text-light w-full">
              E-CELL of DMCE was founded in August, 2014 by Mr. Ankit Jaiswal student of Electronics
              Engineering. The Faculty coordinator was Late Mr. Sameer Ekbote and Faculty advisor
              Dr. Aruna Henry
            </p>

            {/* Team Members Grid */}
            <div className="flex flex-col lg:flex-row gap-[50px] sm:gap-[75px] lg:gap-[100px] w-full justify-center items-center mr-0 lg:mr-[4px] ml-[27px] sm:ml-[41px] lg:ml-[54px]">
              {teamMembers?.map((member, index) => (
                <div
                  key={member?.id}
                  className={`flex flex-col gap-[${index === 0 ? '3px' : index === 1 ? '1px' : '11px'}] sm:gap-[${index === 0 ? '5px' : index === 1 ? '2px' : '17px'}] lg:gap-[${index === 0 ? '6px' : index === 1 ? '2px' : '22px'}] justify-${index === 2 ? 'center' : 'start'} items-center w-full max-w-[${member?.containerWidth}]`}
                >
                  {/* Image Container */}
                  <div
                    className={`flex ${index === 2 ? 'flex-row' : 'flex-col'} justify-center items-${index === 2 ? 'end' : 'center'} w-full ${member?.padding}`}
                    style={{
                      background: 'linear-gradient(180deg, #8f0000 0%, #290000 100%)',
                      borderRadius: '40px',
                    }}
                  >
                    <div
                      className={`flex justify-center items-center w-full max-w-[${member?.bgWidth}] h-[${member?.bgHeight}] ${member?.imageMargin || ''}`}
                      style={{ backgroundColor: '#242222' }}
                    >
                      <img
                        src={member?.image}
                        alt={member?.name}
                        className={`w-full max-w-[${member?.width}] h-auto object-cover`}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3
                    className={`text-[12px] sm:text-[18px] lg:text-md font-kaisei font-bold leading-[18px] sm:leading-[26px] lg:leading-[35px] text-center text-text-light w-auto ${member?.nameMargin}`}
                  >
                    {member?.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
