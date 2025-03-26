// eslint-disable-next-line camelcase
import React from "react";
import clsx from "@/utils/clsx.ts";
import { OultimoframeRoles } from "../../../../tina/__generated__/types.ts";
import ImageWrapper from "@/components/atoms/image-wrapper/ImageWrapper.tsx";
import AspectRatio from "@/types/aspect-ratio.ts";
import { InputField } from "@/components/atoms/input-field/index.tsx";
import { TextInputField } from "@/components/atoms/text-input-field/index.tsx";
import { SubmitButton } from "@/components/atoms/submit-button/index.tsx";

interface ContactSectionProps {
    rolesData: OultimoframeRoles[];
    className?: string;
}

export enum FieldNames {
    name = "name",
    email = "email",
    message = "message",
}

const ContactSection: React.FC = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const [invalidFields, setInvalidFields] = React.useState<FieldNames[]>([]);

    const validateForm = (): boolean => {
        const fields: FieldNames[] = [
            FieldNames.name,
            FieldNames.email,
            FieldNames.message,
        ];

        const newInvalidFields: FieldNames[] = [];

        fields.forEach((field) => {
            if (!validateField(field)) {
                newInvalidFields.push(field);
            }
        });

        setInvalidFields(newInvalidFields); // Atualiza o estado com os campos inválidos encontrados

        return newInvalidFields.length === 0; // Verifica a lista local ao invés do estado global
    };


    const validateField = (field: FieldNames): boolean => {
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        let isValid = true;

        switch (field) {
            case FieldNames.name:
                isValid = nameRegex.test(name);
                break;
            case FieldNames.email:
                isValid = emailRegex.test(email);
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

    const handleSubmit = async () => {
        if (!validateForm()) {
            const formButton = document.getElementById("formButton");

            if (formButton) {
                formButton.classList.remove("shake"); // Remove a classe
                void formButton.offsetWidth; // Força um reflow para reiniciar a animação
                formButton.classList.add("shake"); // Adiciona novamente para rodar a animação
            }

            return;
        }

        const res = await fetch("/api/submit/phone-form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        });

        await res.json();
    };

    return (
        <section className="flex flex-col items-center justify-center h-[95vh] lg:h-[90vh]">

            <div className="flex flex-row items-center justify-center h-fit gap-8">
                <ImageWrapper
                    src="/galeria/capivaras.jpg"
                    alt="Capivaras"
                    className="hidden md:block h-[60vh]"
                    aspectRatio={AspectRatio.ClassicPortrait}
                    sizes="auto"
                />
                <div className="flex flex-col text-start w-[80vw] md:w-[30vw] gap-2 h-full">
                    <p className="text-2xl">Se interessou pelo meu trabalho?</p>
                    <h1 className="text-4xl font-bold">Fala Comigo!</h1>
                    <p className="text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
                        quam sit amet turpis facilisis lacinia vel et ante.
                    </p>
                    <div className="flex flex-col">
                        <h1 className="text-sm font-bold">Nome</h1>
                        <InputField name={FieldNames.name} placeholder="Digite seu nome" value={name} onChange={setName} validateField={validateField} />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-sm font-bold">Email</h1>
                        <InputField name={FieldNames.email} placeholder="Digite seu email" value={email} onChange={setEmail} validateField={validateField} />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-sm font-bold">Mensagem</h1>
                        <TextInputField
                            name={FieldNames.message}
                            validateField={validateField}
                            placeholder="Digite sua mensagem"
                            value={message}
                            onChange={setMessage}
                        />
                    </div>
                    <SubmitButton onClick={() => { handleSubmit() }} isDisabled={false} />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
