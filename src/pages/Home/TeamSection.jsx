import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Late Mr. Sameer Ekbote",
      padding: "pt-[50px] pr-[18px] pb-[50px] pl-[18px]",
      marginTop: "mt-[200px]",
      marginLeft: "ml-[62px]"
    },
    {
      name: "Dr. Aruna Henry",
      padding: "pt-[52px] pr-[54px] pb-[52px] pl-[54px]",
      marginTop: "mt-[194px]"
    },
    {
      name: "Dr. Meghana Chatterjee",
      padding: "pt-[42px] pr-[8px] pb-[42px] pl-[8px]",
      marginTop: "mt-[216px]"
    }
  ];

  return (
    <section className="w-full bg-background-dark">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col justify-center items-center w-full py-[60px] mt-[552px]">
          <h2 
            className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-4xl font-bold leading-[44px] sm:leading-[59px] md:leading-[74px] lg:leading-4xl text-center text-text-accent"
            style={{ fontFamily: 'Oswald' }}
          >
            E-CELL'S BACKBONE
          </h2>
          
          <p 
            className="text-[15px] sm:text-[20px] md:text-[25px] lg:text-lg font-bold leading-[18px] sm:leading-[24px] md:leading-[30px] lg:leading-xl text-center text-text-light w-full max-w-[1220px] mt-[28px] px-4"
            style={{ fontFamily: 'Montserrat' }}
          >
            E-CELL of DMCE was founded in August, 2014 by Mr. Ankit Jaiswal student of Electronics Engineering. The Faculty coordinator was Late Mr. Sameer Ekbote and Faculty advisor Dr. Aruna Henry
          </p>
          
          <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[84%] mt-[26px] gap-8 sm:gap-0">
            {teamMembers?.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col justify-end items-center w-auto h-auto rounded-xl ${member?.padding} ${member?.marginLeft || ''}`}
                style={{ background: 'linear-gradient(180deg, #8f0000 0%, #290000 100%)' }}
              >
                <p 
                  className={`text-[12px] sm:text-[16px] md:text-[20px] lg:text-md font-bold leading-[18px] sm:leading-[24px] md:leading-[29px] lg:leading-2xl text-center text-text-light ${member?.marginTop}`}
                  style={{ fontFamily: 'Kaisei Opti' }}
                >
                  {member?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;