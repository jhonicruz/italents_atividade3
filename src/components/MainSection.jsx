import React from 'react';
import ReactLogo from '../assets/react.svg';
import NextJsLogo from '../assets/next.svg';
import nginxLogo from '../assets/nginx.svg';
import nodeLogo from '../assets/node.svg';
import tailwindLogo from '../assets/tailwind.svg';
import dockerLogo from '../assets/docker.svg';
import Titulo from './Titulo';

const MainSection = () => {
  return (
    <main className=" flex items-center justify-center h-screen w-full pt-[100]  max-custom:flex-col max-custom:gap-8 max-sm:h-[800px] ">
      <div className="flex flex-col items-center justify-center  w-full  gap-4 max-sm:gap-2 ">
        <div className=" flex justify-center gap-4  max-sm:flex-wrap max-sm:gap-1">
          <img src={ReactLogo} alt="" className="w-full max-w-[200px] max-custom:max-w-[150px]" />
          <img src={NextJsLogo} alt="" className="w-full max-w-[200px] max-custom:max-w-[150px]" />
        </div>
        <div className=" flex justify-center gap-4 max-sm:flex-wrap">
          <img src={nginxLogo} alt="" className="w-full max-w-[200px] max-custom:max-w-[150px]" />
          <img src={nodeLogo} alt="" className="w-full max-w-[200px] max-custom:max-w-[150px]" />
        </div>
        <div className=" flex justify-center gap-4 max-sm:flex-wrap">
          <img
            src={tailwindLogo}
            alt=""
            className="w-full max-w-[200px] max-custom:max-w-[150px]"
          />
          <img src={dockerLogo} alt="" className="w-full max-w-[200px] max-custom:max-w-[150px]" />
        </div>
      </div>
      <div className="text-white flex flex-col gap-4 max-custom:text-center max-custom:gap-8">
        <Titulo content="Domine as Tecnologias mais requisitadas do mercado." />
        <p className="text-xl max-sm:text-[16px] ">
          Prepare-se para o futuro com nossos cursos de tecnologia de ponta. Aprenda habilidades
          práticas, ministradas por especialistas, e esteja pronto para liderar a próxima revolução
          digital.
        </p>
      </div>
    </main>
  );
};

export default MainSection;
