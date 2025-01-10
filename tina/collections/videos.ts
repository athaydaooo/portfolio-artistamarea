import { TinaField } from "tinacms";

export const videosCollection = {
  name: "videos",
  label: "Videos",
  path: "content/videos",
  ui: {
    router: () => `/videos`,
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Titulo",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      name: "galleryImages",
      label: "Fotos da Galeria",
      list: true,
      ui: {
        max: 20,
        min: 16,
      },
      fields: [
        {
          type: "image",
          name: "imageUrl",
          label: "URL da Imagem",
        },
        {
          type: "string",
          name: "alt",
          label: "Texto Alternativo",
        },
      ] as TinaField[],
      required: true,
    },
  ] as TinaField[],
};
