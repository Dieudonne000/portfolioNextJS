"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: true },
          size: { value: 3, random: true },
          move: { speed: 1, direction: "none", outModes: "bounce" },
          links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.5, width: 1 },
        },
        background: { color: "transparent" },
      }}
    />
  );
};

export default ParticlesBackground;
