import { TinaField } from "tinacms";

export const aboutCollection = {
  name: "about",
  label: "Sobre Mim",
  path: "content/about",
  ui: {
    router: () => `/about`,
  },
  fields: [
    {
      type: "image",
      name: "aboutImage",
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
      type: "rich-text",
      name: "body",
      label: "Corpo",
      isBody: true,
      required: true,
    },
  ] as TinaField[],
};
