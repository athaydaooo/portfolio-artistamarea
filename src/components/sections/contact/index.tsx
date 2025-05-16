// eslint-disable-next-line camelcase
import React from "react";

import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import { InputField } from "@/components/atoms/input-field/index.tsx";
import { SubmitButton } from "@/components/atoms/submit-button/index.tsx";
import { TextInputField } from "@/components/atoms/text-input-field/index.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

import { ContactFieldNames } from "@/types/contact-field-names.ts";
import { forceReflow } from "@/utils/force-reflow.ts";
import { getInvalidFieldClass } from "@/utils/get-invalid-field-class.ts";
import "./style.css";

interface ContactSectionProps {
  image: string;
  title: string;
  subtitle: string;
  body: TinaMarkdownContent;
}

const ContactSection: React.FC<ContactSectionProps> = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [invalidFields, setInvalidFields] = React.useState<ContactFieldNames[]>(
    [],
  );
  const validateField = (field: ContactFieldNames): boolean => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const messageRegex = /.+/;

    let isValid = true;

    switch (field) {
      case ContactFieldNames.name:
        isValid = nameRegex.test(name);
        break;
      case ContactFieldNames.email:
        isValid = emailRegex.test(email);
        break;
      case ContactFieldNames.message:
        isValid = messageRegex.test(message);
        break;
      default:
        return true;
    }

    setInvalidFields((prev) => {
      const newInvalidFields = prev.filter((f) => f !== field);
      if (!isValid) newInvalidFields.push(field);
      return newInvalidFields;
    });

    return isValid;
  };

  const validateForm = (): boolean => {
    const fields: ContactFieldNames[] = [
      ContactFieldNames.name,
      ContactFieldNames.email,
      ContactFieldNames.message,
    ];

    const newInvalidFields: ContactFieldNames[] = [];

    fields.forEach((field) => {
      if (!validateField(field)) {
        newInvalidFields.push(field);
      }
    });

    setInvalidFields(newInvalidFields); // Atualiza o estado com os campos inválidos encontrados

    return newInvalidFields.length === 0; // Verifica a lista local ao invés do estado global
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      const formButton = document.getElementById("formButton");

      if (formButton) {
        formButton.classList.remove("shake"); // Remove a classe
        forceReflow(formButton); // Força um reflow para reiniciar a animação
        formButton.classList.add("shake"); // Adiciona novamente para rodar a animação
      }

      return;
    }

    const response = await fetch("/api/email/sendContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send contact message");
    }

    await response.json();
    // reset the form fields
    setName("");
    setEmail("");
    setMessage("");
    setInvalidFields([]);
  };

  return (
    <section className="flex flex-col items-center justify-center py-8 lg:py-0 lg:h-[100vh]">
      <div className="flex flex-row items-center justify-center h-fit gap-8">
        <ImageWrapper
          src={props.image}
          alt="Imagem de contato"
          className="hidden md:block h-[60vh]"
          aspectRatio={AspectRatio.ClassicPortrait}
          sizes="auto"
        />
        <div className="flex flex-col text-start w-[80vw] md:w-[30vw] gap-2 h-full">
          <p className="text-2xl lg:text-5xl 2k:text-6xl font-extralight">
            {props.title}
          </p>
          <h1 className="text-xl">{props.subtitle}</h1>
          <TinaMarkdown content={props.body} />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold">Nome</h1>
            <InputField
              className={getInvalidFieldClass(
                invalidFields,
                ContactFieldNames.name,
              )}
              name={ContactFieldNames.name}
              placeholder="Digite seu nome"
              value={name}
              onChange={setName}
              validateField={validateField}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold">Email</h1>
            <InputField
              className={getInvalidFieldClass(
                invalidFields,
                ContactFieldNames.email,
              )}
              name={ContactFieldNames.email}
              placeholder="Digite seu email"
              value={email}
              onChange={setEmail}
              validateField={validateField}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold">Mensagem</h1>
            <TextInputField
              className={getInvalidFieldClass(
                invalidFields,
                ContactFieldNames.message,
              )}
              name={ContactFieldNames.message}
              validateField={validateField}
              placeholder="Digite sua mensagem"
              value={message}
              onChange={setMessage}
            />
          </div>
          <div id="formButton">
            <SubmitButton
              onClick={() => {
                handleSubmit();
              }}
              isDisabled={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
