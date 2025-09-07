import React, { useState, useEffect, useRef } from 'react';

const SLIDE_SPEED = 45; // px per second (increased from 30)

const SponsorsSection = () => {
  const sponsors = [
    {
      src: '/images/img_si_uk_2.png',
      alt: 'SI UK',
      width: '146px',
      height: '66px',
      padding: 'pt-[66px] pr-[26px] pb-[66px] pl-[26px]',
    },
    {
      src: '/images/img_paradise_group_2.png',
      alt: 'Paradise Group',
      width: '160px',
      height: '66px',
      padding: 'pt-[66px] pr-[18px] pb-[66px] pl-[18px]',
    },
    {
      src: '/images/img_upgrad_1.png',
      alt: 'UpGrad',
      width: '152px',
      height: '152px',
      padding: 'pt-[16px] pr-[16px] pb-[16px] pl-[16px]',
      borderRadius: 'rounded-md',
      marginTop: 'mt-[12px]',
    },
    {
      src: '/images/img_krawl_1.png',
      alt: 'Krawl',
      width: '152px',
      height: '152px',
      padding: 'pt-[22px] pr-[22px] pb-[22px] pl-[22px]',
      borderRadius: 'rounded-md',
    },
    {
      src: '/images/img_clothing_1.png',
      alt: 'Clothing',
      width: '140px',
      height: '152px',
      padding: 'pt-[22px] pr-[22px] pb-[22px] pl-[22px]',
      borderRadius: 'rounded-md',
    },
    {
      src: '/assets/images/Screenshot_2025-09-06_233730-1757182121501.png',
      alt: 'The Social Affair Cafe',
      width: '152px',
      height: '152px',
      padding: 'pt-[16px] pr-[16px] pb-[16px] pl-[16px]',
      borderRadius: 'rounded-md',
    },
    {
      src: '/assets/images/Screenshot_2025-09-06_233741-1757182273935.png',
      alt: 'Rio - Bubbly Fruity Drink',
      width: '152px',
      height: '152px',
      padding: 'pt-[16px] pr-[16px] pb-[16px] pl-[16px]',
      borderRadius: 'rounded-md',
    },
    {
      src: '/assets/images/Screenshot_2025-09-06_233718-1757182360174.png',
      alt: 'PVP World',
      width: '152px',
      height: '152px',
      padding: 'pt-[16px] pr-[16px] pb-[16px] pl-[16px]',
      borderRadius: 'rounded-md',
    },
  ];

  // Duplicate sponsors for seamless looping
  const sponsorsLoop = [...sponsors, ...sponsors];

  const [offset, setOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Calculate total width of all cards
  useEffect(() => {
    if (wrapperRef.current) {
      setContainerWidth(wrapperRef.current.scrollWidth / 2); // only original set
    }
  }, [sponsors.length]);

  // Only animate when in viewport
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Animation loop for sliding
  useEffect(() => {
    if (!isVisible || containerWidth === 0) return;
    let animationFrame;
    let lastTime = performance.now();

    const animate = (now) => {
      const elapsed = now - lastTime;
      lastTime = now;
      setOffset((prev) => {
        let next = prev + (SLIDE_SPEED * elapsed) / 1000;
        if (next >= containerWidth) next -= containerWidth;
        return next;
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, containerWidth]);

  return (
    <section className="w-full bg-background-dark" ref={sectionRef}>
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-start items-center w-full">
          <h2
            className={`text-[30px] sm:text-[40px] md:text-[50px] lg:text-4xl font-bold leading-[44px] sm:leading-[59px] md:leading-[74px] lg:leading-4xl text-left text-text-accent mt-[212px] transition-all duration-700 ${
              isVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ fontFamily: 'Oswald' }}
          >
            OUR SPONSORS
          </h2>
          <div className="relative w-full overflow-x-hidden mt-[114px] min-h-[250px]">
            <div
              ref={wrapperRef}
              className="flex items-center gap-[24px] sm:gap-[48px] p-0" // add p-0 to ensure no padding
              style={{
                transform: `translateX(-${offset}px)`,
                transition: 'none',
                width: 'max-content',
                willChange: 'transform',
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              {sponsorsLoop.map((sponsor, index) => (
                <div
                  key={index}
                  className={`sponsor-card flex flex-col justify-center items-center w-[200px] h-auto rounded-2xl shadow-[0px_4px_4px_#d81c1e] ${sponsor?.padding} 
                    transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] cursor-pointer group overflow-hidden
                    hover:transform hover:scale-105 hover:-translate-y-2 
                    hover:shadow-[0px_8px_16px_#d81c1e] hover:animate-pulse-glow
                    active:scale-95 active:transition-transform active:duration-150
                  `}
                  style={{
                    background: 'linear-gradient(228deg, #460505 0%, #ac0d0d 100%)',
                    border: '2px solid #d81c1e',
                  }}
                >
                  <img
                    src={sponsor?.src}
                    alt={sponsor?.alt}
                    className={`${sponsor?.borderRadius || 'rounded-sm'} ${sponsor?.marginTop || ''} 
                      transition-all duration-500 ease-in-out
                      group-hover:transform group-hover:scale-110 group-hover:brightness-110
                      group-hover:filter group-hover:drop-shadow-lg
                      group-active:scale-100 group-active:brightness-100
                      ${sponsor?.cardType ? 'border-2 border-red-600' : ''}
                    `}
                    style={{
                      width: sponsor?.width,
                      maxWidth: '100%',
                      height: 'auto',
                      ...sponsor?.cropStyle,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
