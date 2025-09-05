import React from 'react';
import { twMerge } from 'tailwind-merge';

const Footer = ({ className, ...props }) => {
  const quickLinks = [
    { text: "Home", href: "/" },
    { text: "About us", href: "/about" },
    { text: "Event", href: "/events" },
    { text: "Gallery", href: "/gallery" },
    { text: "Team", href: "/team" },
    { text: "Contact", href: "/contact" }
  ];

  const resources = [
    { text: "FAQs", href: "/faqs" },
    { text: "Register", href: "/register" },
    { text: "Volunteer", href: "/volunteer" }
  ];

  const legal = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms & Conditions", href: "/terms" }
  ];

  const socialLinks = [
    {
      icon: "/images/img_vector.svg",
      text: "Ecell.dmce.14@gmail.com",
      href: "mailto:Ecell.dmce.14@gmail.com",
      type: "email"
    },
    {
      icon: "/images/img_group.svg",
      text: "ecell_dmce",
      href: "https://instagram.com/ecell_dmce",
      type: "instagram"
    },
    {
      icon: "/images/img_group_5.svg",
      text: "ECell_DMCE",
      href: "https://linkedin.com/company/ecell-dmce",
      type: "linkedin"
    },
    {
      icon: "/images/img_vector_white_a700.svg",
      text: "ECell_DMCE",
      href: "https://facebook.com/ecell.dmce",
      type: "facebook"
    }
  ];

  return (
    <footer 
      className={twMerge(
        "w-full bg-background-dark py-[62px]",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col justify-start items-center w-full mb-[26px]">
          <div className="flex flex-col lg:flex-row justify-between items-start w-full mx-[72px] lg:mx-0 lg:px-[72px] gap-8 lg:gap-0">
            
            {/* Logo and Location Section */}
            <div className="flex flex-col gap-[16px] justify-start items-start w-full lg:w-[24%]">
              <img 
                src="/images/img_enspire_25_1.png" 
                alt="E-CELL DMCE Logo"
                className="w-[70%] max-w-[228px] h-auto"
              />
              <p 
                className="text-md font-light leading-lg text-left text-text-light w-full ml-[12px]"
                style={{ fontFamily: 'Open Sans' }}
              >
                📍 Location: Datta Meghe College of Engineering, Navi Mumbai
              </p>
            </div>

            {/* Links and Contact Section */}
            <div className="flex flex-col gap-[6px] justify-start items-start w-full lg:w-[66%] mt-0 lg:mt-[22px]">
              
              {/* Section Headers */}
              <div className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-[82%] gap-4 sm:gap-0">
                <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[56%] gap-4 sm:gap-0">
                  <h3 
                    className="text-md font-bold leading-lg text-left text-text-light"
                    style={{ fontFamily: 'Open Sans' }}
                  >
                    Quick Links
                  </h3>
                  <h3 
                    className="text-md font-bold leading-lg text-left text-text-light"
                    style={{ fontFamily: 'Open Sans' }}
                  >
                    Resources
                  </h3>
                  <h3 
                    className="text-md font-bold leading-lg text-left text-text-light"
                    style={{ fontFamily: 'Open Sans' }}
                  >
                    Legal
                  </h3>
                </div>
                <a
                  href="/contact"
                  className="text-md font-bold leading-lg text-left text-text-light hover:text-text-accent transition-colors duration-200"
                  style={{ fontFamily: 'Open Sans' }}
                >
                  Contact Us
                </a>
              </div>

              {/* Links Content */}
              <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-8 lg:gap-0">
                
                {/* Quick Links and Resources Stack */}
                <div className="flex flex-col sm:flex-row justify-start w-full lg:w-[320px] gap-8 sm:gap-0">
                  
                  {/* Quick Links */}
                  <div className="w-full sm:w-[64%]">
                    <div className="flex flex-col gap-2">
                      {quickLinks?.map((link, index) => (
                        <a
                          key={index}
                          href={link?.href}
                          className="text-md font-light leading-lg text-left text-text-light hover:text-text-accent transition-colors duration-200"
                          style={{ fontFamily: 'Open Sans' }}
                        >
                          {link?.text}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Resources */}
                  <div className="w-full sm:w-[40%]">
                    <div className="flex flex-col gap-2">
                      {resources?.map((resource, index) => (
                        <a
                          key={index}
                          href={resource?.href}
                          className="text-md font-light leading-lg text-left text-text-light hover:text-text-accent transition-colors duration-200"
                          style={{ fontFamily: 'Open Sans' }}
                        >
                          {resource?.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Legal Section */}
                <div className="w-full lg:w-[26%] mt-0 lg:mt-[8px] ml-0 lg:ml-[34px]">
                  <div className="flex flex-col gap-2">
                    {legal?.map((item, index) => (
                      <a
                        key={index}
                        href={item?.href}
                        className="text-md font-light leading-lg text-left text-text-light hover:text-text-accent transition-colors duration-200"
                        style={{ fontFamily: 'Open Sans' }}
                      >
                        {item?.text}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col gap-[14px] justify-start items-start w-full lg:flex-1 ml-0 lg:ml-[10px]">
                  {socialLinks?.map((social, index) => (
                    <div key={index} className="flex justify-start items-center w-full gap-2">
                      <img 
                        src={social?.icon} 
                        alt={`${social?.type} icon`}
                        className="w-[26px] h-auto"
                      />
                      <div className="w-[12px] h-[2px] bg-text-light ml-2"></div>
                      <a
                        href={social?.href}
                        className="text-sm font-light leading-sm text-left text-text-light hover:text-text-accent transition-colors duration-200 ml-2"
                        style={{ fontFamily: 'Open Sans' }}
                      >
                        {social?.text}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[2px] bg-background-light mt-[108px]"></div>

          {/* Copyright */}
          <p 
            className="text-md font-light leading-lg text-left text-text-light mt-[24px] text-center"
            style={{ fontFamily: 'Open Sans' }}
          >
            © 2025 ECELL | E-CELL DMCE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;