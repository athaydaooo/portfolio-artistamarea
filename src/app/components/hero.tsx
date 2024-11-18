"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Hero: React.FC = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // Animação de flutuação
    const animation = gsap.to(imageRef.current, {
      y: -10, // Mover para cima
      duration: 1, // Duração da animação
      yoyo: true, // Repetir a animação ao contrário
      repeat: -1, // Repetir indefinidamente
      ease: "sine.inOut", // Suavização da animação
    });

    return () => {
      animation.kill(); // Limpar animação ao desmontar o componente
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/mareabee_logo_vazado.png"
        alt="logo"
        width={650}
        height={650}
        ref={imageRef}
      />
    </div>
  );
};

export default Hero;
