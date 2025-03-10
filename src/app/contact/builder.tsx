"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";
import { InputField } from "@/components/atoms/input-field/index.tsx";
import { TextInputField } from "@/components/atoms/text-input-field/index.tsx";
import { ModelQuery } from "../../../tina/__generated__/types.ts";
import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import { SubmitButton } from "@/components/atoms/submit-button/index.tsx";

export interface ContactPageBuilderProps {
  data: ModelQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

const ContactBuilder: React.FC<ContactPageBuilderProps> = (props) => {
  const { data } = useTina(props);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="grid grid-cols-2 items-center justify-center h-fit gap-6">
          <ImageWrapper
            src="/galeria/capivaras.jpg"
            alt="Capivaras"
            className="hidden md:block h-full"
            aspectRatio={AspectRatio.ClassicPortrait}
            sizes="auto"
          />
          <div className="flex flex-col text-start w-[80vw] md:w-[30vw] gap-2 h-fit">
            <p className="text-2xl">Se interessou pelo meu trabalho?</p>
            <h1 className="text-4xl font-bold">Fala Comigo!</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
              quam sit amet turpis facilisis lacinia vel et ante.
            </p>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold">Nome</h1>
              <InputField placeholder="Digite seu nome" value={""} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold">Email</h1>
              <InputField placeholder="Digite seu email" value={""} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold">Mensagem</h1>
              <TextInputField
                placeholder="Digite sua mensagem"
                value={""}
                onChange={() => {}}
              />
            </div>
            <SubmitButton onClick={() => {}} isDisabled={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBuilder;
