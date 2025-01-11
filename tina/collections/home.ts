import AspectRatio from "@/types/aspect-ratio.ts";
import enumToOptions from "@/utils/enum-to-options.ts";
import { TinaField } from "tinacms";

export const homeCollection = {
  name: "home",
  label: "Home - Galeria",
  path: "content/home",
  ui: {
    router: () => `/`,
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
      name: "images",
      label: "Imagens",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.title };
        },
        visualSelector: true,
        min: 16,
        max: 20,
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
          type: "image",
          name: "imageUrl",
          label: "Imagem",
          required: true,
        },
        {
          type: "string",
          name: "alt",
          label: "Texto Alternativo",
          required: true,
        },
        {
          type: "string",
          name: "aspectRatio",
          label: "Orientacao",
          options: enumToOptions(AspectRatio),
          required: true,
        },
      ] as TinaField[],
      required: true,
    },
  ] as TinaField[],
};
