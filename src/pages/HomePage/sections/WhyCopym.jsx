import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import AiOverview from "./AiOverview";
import SecurityFeaturesSection from "./SecurityFeaturesSection";
import TechnologyStackSection from "./TechnologyStackSection";
import "../../../styles/WhyCopymScrollTrigger.css";

const WhyCopymSection = () => {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Only initialize ScrollTrigger on desktop
    if (isMobile) {
      setIsInitialized(true);
      return;
    }

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Wait for DOM to be ready
    const initScrollTrigger = () => {
      const container = containerRef.current;
      const sections = [section1Ref.current, section2Ref.current, section3Ref.current];
      
      if (!container || !sections.every(section => section)) {
        console.log("Waiting for sections to load...");
        setTimeout(initScrollTrigger, 100);
        return;
      }

      console.log("Initializing ScrollTrigger...");
      
      try {
        // Calculate the actual content height for each section
        const sectionHeights = sections.map(section => {
          const content = section.querySelector('.max-w-7xl');
          return content ? content.scrollHeight : 1000;
        });
        
        console.log("Section heights:", sectionHeights);
        
        // Calculate total scroll distance based on actual content
        const maxSectionHeight = Math.max(...sectionHeights);
        const totalScrollDistance = maxSectionHeight * 3; // 3 sections
        
        console.log("Total scroll distance:", totalScrollDistance);

        // Create the main timeline with proper duration
        const tl = gsap.timeline({
          defaults: {
            ease: "none"
          },
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: `+=${totalScrollDistance}`,
            pin: true,
            scrub: 1,
            markers: false,
            onEnter: () => console.log("ScrollTrigger entered"),
            onLeave: () => console.log("ScrollTrigger left"),
            onEnterBack: () => console.log("ScrollTrigger entered back"),
            onLeaveBack: () => console.log("ScrollTrigger left back"),
            onUpdate: (self) => {
              console.log("ScrollTrigger progress:", self.progress);
            }
          }
        });

        // Calculate the scroll distance for each section
        const sectionsCount = sections.length;
        const sectionScrollDistance = totalScrollDistance / sectionsCount;

        // Add vertical scroll animations for each section with proper timing
        sections.forEach((section, i) => {
          if (section) {
            console.log(`Adding animation for section ${i}`);
            
            // Calculate the start and end positions for this section
            const sectionStart = i * sectionScrollDistance;
            const sectionEnd = (i + 1) * sectionScrollDistance;
            
            // Calculate the actual scroll distance for this section's content
            const contentHeight = sectionHeights[i];
            const viewportHeight = window.innerHeight;
            const scrollDistance = Math.max(0, contentHeight - viewportHeight);
            
            console.log(`Section ${i} content height: ${contentHeight}, viewport height: ${viewportHeight}, scroll distance: ${scrollDistance}`);
            
            // Add vertical scroll animation for this section
            if (scrollDistance > 0) {
              tl.to(
                section,
                {
                  y: -scrollDistance,
                  duration: sectionScrollDistance / 1000, // Convert to seconds
                  ease: "none"
                },
                sectionStart / 1000 // Start time in seconds
              );
            }
            
            // Add horizontal scroll to next section (except for the last section)
            if (i < sectionsCount - 1) {
              tl.to(contentRef.current, {
                xPercent: -100 * (i + 1),
                duration: sectionScrollDistance / 1000,
                ease: "none"
              }, sectionStart / 1000);
            }
          }
        });

        setIsInitialized(true);
        console.log("ScrollTrigger initialized successfully");

      } catch (error) {
        console.error("Error initializing ScrollTrigger:", error);
      }
    };

    // Initialize with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(initScrollTrigger, 500);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  // Mobile layout - normal stacked sections
  if (isMobile) {
    return (
      <section className="w-full px-6 py-12">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl brand-title text-[#255f99] relative inline-block">
            Why Copym?
            <span className="block w-24 h-1 bg-green-600 mt-4 mx-auto rounded-full"></span>
          </h2>
        </div>

        {/* Mobile: Normal stacked sections */}
        <div className="space-y-16">
          {/* Section 1: AI Overview */}
          <div className="w-full">
            <AiOverview />
          </div>

          {/* Section 2: Security Features */}
          <div className="w-full">
            <SecurityFeaturesSection />
          </div>

          {/* Section 3: Technology Stack */}
          <div className="w-full">
            <TechnologyStackSection />
          </div>
        </div>
      </section>
    );
  }

  // Desktop layout - GSAP ScrollTrigger horizontal scroll
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl brand-title text-[#255f99] relative inline-block">
          Why Copym?
          <span className="block w-24 h-1 bg-green-600 mt-4 mx-auto rounded-full"></span>
        </h2>
      </div>

      {/* Desktop: GSAP ScrollTrigger Container */}
      <div ref={wrapperRef} className="why-copym-wrapper">
        <div ref={containerRef} className="why-copym-container">
          <div ref={contentRef} className="why-copym-content">
            {/* Section 1: AI Overview */}
            <div ref={section1Ref} className="why-copym-section">
              <AiOverview />
            </div>

            {/* Section 2: Security Features */}
            <div ref={section2Ref} className="why-copym-section">
              <SecurityFeaturesSection />
            </div>

            {/* Section 3: Technology Stack */}
            <div ref={section3Ref} className="why-copym-section">
              <TechnologyStackSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCopymSection;