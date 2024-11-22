// eslint-disable-next-line camelcase
import { Noto_Serif_Display } from "next/font/google";
import React from "react";
import IconReferenced from "@/components/atoms/icon-referenced/IconReferenced.tsx";
import TextReferenced from "@/components/atoms/text-referenced/TextReferenced.tsx";

const notoSerifDisplay = Noto_Serif_Display({
  variable: "--font-noto-serif-display",
  weight: "300",
});

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-screen items-center text-center text-surface">
      <div
        className={`container p-10 text-center text-4xl md:text-6xl ${notoSerifDisplay.className} `}
      >
        <h1>ARTISTA MAREA</h1>
      </div>
      <div className="flex flex-row justify-center gap-4 p-6">
        <IconReferenced
          name="instagram"
          invertColor={false}
          size={40}
          url="/icons/black-instagram.svg"
          targetUrl="https://www.instagram.com/artistamarea/"
          className="cursor-pointer"
        />

        <IconReferenced
          name="linkedin"
          invertColor={false}
          size={40}
          url="/icons/black-linkedin.svg"
          targetUrl="https://www.linkedin.com/in/maria-claudia-oliva-3a8179312/"
          className="cursor-pointer"
        />

        <IconReferenced
          name="email"
          invertColor={false}
          size={40}
          url="/icons/black-email.svg"
          targetUrl="mailto:taymana@outlook.com"
          className="cursor-pointer"
        />
      </div>

      <div className="w-full p-4 text-center">
        © 2024 Copyright:
        <TextReferenced
          linkedText=" Athayde Labs"
          targetUrl="https://www.athaydelabs.com"
          className="cursor-pointer"
          name="Athayde Labs Link"
        />
      </div>
    </footer>
  );
};

export default Footer;
