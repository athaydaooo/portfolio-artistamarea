import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center lg:h-full w-full">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-center h-full w-full">
        <div className="flex flex-col items-center">
          <ImageWrapper
            alt="maria-claudia"
            className={"w-[60vw] md:w-[40vw] lg:w-[30vw] mt-10 lg:mt-auto"}
            aspectRatio={AspectRatio.Square}
            key="maria-claudia"
            sizes="auto"
            src="/sobre-mim/mariaicon.jpg"
          />
        </div>

        <div className="relative flex flex-col w-[90vw] lg:w-[30vw] mx-auto my-10 lg:m-10">
          <h1 className="text-2xl text-start">Oie, eu sou a Maria Claudia!</h1>
          <br />
          <p className="text-md">
            Fotógrafa e produtora audiovisual em Santos, uma cidade que inspira
            meu olhar e alimenta minha criatividade. Minha paixão pela imagem
            vem de uma profunda admiração pela capacidade de capturar momentos
            únicos e contar histórias através de detalhes.
          </p>
          <br />
          <p className="text-md">
            Com a câmera em mãos, busco retratar não apenas o que vejo, mas
            também as emoções e as conexões que tornam cada instante especial.
            Na fotografia, meu objetivo é sempre captar a essência das pessoas e
            lugares que registro. Seja em um retrato cheio de personalidade ou
            em um ensaio documental, procuro transmitir autenticidade e beleza
            em cada clique. Como produtora audiovisual, combino essa visão
            artística com a parte técnica, criando vídeos que emocionam e contam
            histórias significativas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
