import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";
import particlesConfig from "../assets/particles.json";

const particlesInit = async (Engine) => {
  console.log(Engine);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(Engine);
};

const ParticlesBackground = () => {
  return (
    <Particles
      className="h-full object-cover absolute w-full"
      canvasClassName="will-change-auto h-full"
      options={particlesConfig}
      init={particlesInit}
    />
  );
};

export default ParticlesBackground;