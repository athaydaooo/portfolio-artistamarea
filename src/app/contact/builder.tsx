"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";
import ContactSection from "@/components/sections/contact/index.tsx";
import { ContactQuery } from "../../../tina/__generated__/types.ts";

export interface ContactPageBuilderProps {
  data: ContactQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

const ContactBuilder: React.FC<ContactPageBuilderProps> = (props) => {
  const { data } = useTina(props);
  return (
    <ContactSection
      title={data.contact.title}
      subtitle={data.contact.subtitle}
      body={data.contact.body}
      image={data.contact.contactImage}
    />
  );
};

export default ContactBuilder;
