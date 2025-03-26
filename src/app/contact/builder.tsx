"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";
import { InputField } from "@/components/atoms/input-field/index.tsx";
import { TextInputField } from "@/components/atoms/text-input-field/index.tsx";
import { ModelQuery } from "../../../tina/__generated__/types.ts";
import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import { SubmitButton } from "@/components/atoms/submit-button/index.tsx";
import ContactSection from "@/components/sections/contact/index.tsx";

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
    <ContactSection />
  );
};

export default ContactBuilder;