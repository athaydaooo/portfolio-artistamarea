// eslint-disable-next-line camelcase
import React from "react";
import IconReferenced from "@/components/atoms/icon-referenced/IconReferenced.tsx";
import TextReferenced from "@/components/atoms/text-referenced/TextReferenced.tsx";
import clsx from "@/utils/clsx.ts";

interface FooterProps {
  className?: string;
}

const FooterSection: React.FC<FooterProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        className || null,
        "relative flex items-center justify-center w-full",
      )}
    >
      <footer className="flex flex-col w-full items-center text-center text-surface bg-gray-950 p-10">
        <div className="container p-10 text-center text-white text-4xl">
          <h1>ARTISTA MAREA</h1>
        </div>
        <div className="flex flex-row justify-center gap-4 p-6">
          <IconReferenced
            name="instagram"
            invertColor={true}
            size={30}
            url="/icons/black-instagram.svg"
            targetUrl="https://www.instagram.com/artistamarea/"
            className="cursor-pointer"
          />

          <IconReferenced
            name="linkedin"
            invertColor={true}
            size={30}
            url="/icons/black-linkedin.svg"
            targetUrl="https://www.linkedin.com/in/maria-claudia-oliva-3a8179312/"
            className="cursor-pointer"
          />

          <IconReferenced
            name="email"
            invertColor={true}
            size={30}
            url="/icons/black-email.svg"
            targetUrl="mailto:taymana@outlook.com"
            className="cursor-pointer"
          />
        </div>

        <div className="w-full text-center text-white">
          © 2024 Copyright:
          <TextReferenced
            linkedText=" Athayde Labs"
            targetUrl="https://linkedin.com/in/athaydaooo"
            className="cursor-pointer"
            name="Athayde Labs Link"
          />
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
