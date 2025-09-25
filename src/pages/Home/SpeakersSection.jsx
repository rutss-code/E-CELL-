import React, { useState, useEffect, useRef } from 'react';

const SLIDE_SPEED = 45; // px per second

const SpeakersSection = () => {
  const speakers = [
    {
      id: 1,
      image: '/images/img_Ashish_55.png',
      name: 'Mr. Ashish Chanchlani',
    },
    {
      id: 2,
      image: '/images/img_Ajit_56.png',
      name: 'Mr. Ajit',
    },
    {
      id: 3,
      image: '/images/img_RK_57.png',
      name: 'Mr. Rk',
    },
    {
      id: 4,
      image: '/images/img_rectangle_56_310x292.png',
      name: 'Mr. Shridhar Mankar',
    },
    {
      id: 5,
      image: '/images/img_rectangle_56_184x200.png',
      name: 'Mr. Devesh Chawla',
    },
    {
      id: 6,
      image: '/images/img_rectangle_61.png',
      name: 'Mr. Ali Solanki',
    },
    {
      id: 7,
      image: '/images/img_sameer_sir_removebg_preview.png',
      name: 'Ms. Sarah Johnson',
    },
    {
      id: 8,
      image: '/images/img_deepali_mam_removebg_preview.png',
      name: 'Dr. Deepali Sharma',
    },
  ];

  // Duplicate speakers for seamless looping
  const speakersLoop = [...speakers, ...speakers];

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
  }, [speakers.length]);

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
    <section
      id="speakers-section"
      className="w-full bg-background-primary py-[30px] sm:py-[45px] lg:py-[60px] mb-0 scroll-smooth"
      ref={sectionRef}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col gap-[40px] sm:gap-[60px] lg:gap-[80px] justify-start items-center w-full">
          {/* Section Title */}
          <h2 className="text-[30px] sm:text-[45px] lg:text-3xl font-oswald font-bold leading-[44px] sm:leading-[67px] lg:leading-3xl text-center text-text-accent w-auto">
            OUR PREVIOUS SPEAKERS
          </h2>

          {/* Speakers Carousel Loop */}
          <div className="relative w-full overflow-x-hidden">
            <div
              ref={wrapperRef}
              className="flex items-center gap-6 sm:gap-8 lg:gap-10 px-0"
              style={{
                transform: `translateX(-${offset}px)`,
                transition: 'none',
                width: 'max-content',
                willChange: 'transform',
              }}
            >
              {speakersLoop.map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center w-[280px] max-w-[280px] mx-auto transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg"
                >
                  {/* Backbone Card Container */}
                  <div
                    className="flex flex-col justify-center items-center w-full h-[320px] p-6 rounded-[40px] relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, #8f0000 0%, #290000 100%)',
                    }}
                  >
                    {/* Inner Image Container */}
                    <div
                      className="flex justify-center items-center w-full h-[220px] rounded-[20px] overflow-hidden relative"
                      style={{ backgroundColor: '#242222' }}
                    >
                      <img
                        src={speaker?.image}
                        alt={speaker?.name}
                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    {/* Name Inside Card */}
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <h3
                        className="text-[14px] sm:text-[16px] lg:text-[18px] font-oswald font-bold leading-[20px] sm:leading-[24px] lg:leading-[26px] text-white bg-black bg-opacity-70 px-3 py-2 rounded-[20px] backdrop-blur-sm"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                      >
                        {speaker?.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        #speakers-section {
          scroll-margin-top: 80px;
        }
      `}</style>
    </section>
  );
};

export default SpeakersSection;
