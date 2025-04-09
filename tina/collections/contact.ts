import { TinaField } from "tinacms";

export const contactCollection = {
  name: "contact",
  label: "Contato",
  path: "content/contact",
  ui: {
    router: () => `/contact`,
  },
  fields: [
    {
      type: "image",
      name: "contactImage",
      label: "Foto",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Titulo",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitulo",
      isTitle: false,
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Corpo",
      isBody: true,
      required: true,
    },
  ] as TinaField[],
};
