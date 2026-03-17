import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {

  const heroRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // headline animation
      gsap.from(".letter", {
        y: 60,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out"
      });

      // stats animation
      gsap.from(".stat", {
        y: 40,
        opacity: 0,
        stagger: 0.25,
        delay: 0.6,
        duration: 0.8
      });

      // car scroll animation
      gsap.to(carRef.current, {
        x: window.innerWidth + 400,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: true
        }
      });

    }, heroRef);

    return () => ctx.revert();

  }, []);

  const text = "WELCOME ITZ FIZZ".split("");

  return (
    <section
      ref={heroRef}
      className="h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden"
    >

      {/* Headline */}
      <h1 className="text-6xl tracking-[0.5em] text-center mb-20 z-10">

        {text.map((char, index) => (
          <span key={index} className="letter inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}

      </h1>

      {/* Stats */}
      <div className="flex gap-20 mb-24 z-10">

        <div className="stat text-center">
          <h2 className="text-3xl font-bold">95%</h2>
          <p className="text-gray-400">Performance</p>
        </div>

        <div className="stat text-center">
          <h2 className="text-3xl font-bold">80%</h2>
          <p className="text-gray-400">Efficiency</p>
        </div>

        <div className="stat text-center">
          <h2 className="text-3xl font-bold">120+</h2>
          <p className="text-gray-400">Speed Tests</p>
        </div>

      </div>

      {/* Car */}
      <img
        ref={carRef}
        src="/car.png"
        alt="car"
        className="w-[250px] absolute bottom-16 -left-[150px] transform-gpu"
      />

    </section>
  );
};

export default Hero;