import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-center h-[90vh] w-full bg-gray-50 overflow-y-auto">
      <div className="flex flex-col items-center">
        <ImageWrapper
          alt="maria-claudia"
          className={"w-[60vw] mt-10 lg:mt-auto lg:w-[30vw]"}
          aspectRatio={AspectRatio.Square}
          key="maria-claudia"
          sizes="auto"
          src="/mareabee/mariaicon.jpg"
        />
      </div>

      <div className="relative flex flex-col w-[90vw] lg:w-[30vw] mx-auto my-10 lg:m-10 ">
        <h1 className="text-2xl  text-start">
          Meu nome é Maria Claudia, sou Fotográfa e Produtora Audiovisual em
          Santos.
        </h1>
        <br />
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
          est massa. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Praesent justo tellus, tincidunt id
          vehicula pretium, gravida vel mauris.
        </p>
        <br />
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
          est massa. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Praesent justo tellus, tincidunt id
          vehicula pretium, gravida vel mauris.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam ut est massa. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Praesent justo tellus, tincidunt id vehicula pretium, gravida
          vel mauris.
        </p>
        <br />
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
          est massa. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Praesent justo tellus, tincidunt id
          vehicula pretium, gravida vel mauris.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam ut est massa. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Praesent justo tellus, tincidunt id vehicula pretium, gravida
          vel mauris.
        </p>
      </div>
    </div>
  );
};

export default About;
