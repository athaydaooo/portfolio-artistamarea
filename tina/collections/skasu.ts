import AspectRatio from "@/types/aspect-ratio.ts";
import enumToOptions from "@/utils/enum-to-options.ts";
import { TinaField } from "tinacms";

export const skasuCollection = {
  name: "skasucristoeoxala",
  label: "Skasu - Cristo e Oxalá",
  path: "content/skasucristoeoxala",
  ui: {
    router: () => `/skasu-cristo-e-oxala`,
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
      name: "desktopHero",
      label: "Hero Desktop",
      required: true,
    },
    {
      type: "image",
      name: "mobileHero",
      label: "Hero Mobile",
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
        min: 1,
        max: 6,
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
          type: "rich-text",
          name: "body",
          label: "Corpo de texto",
          isBody: true,
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
    {
      type: "object",
      name: "credits",
      label: "Créditos",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.title };
        },
        visualSelector: true,
        min: 1,
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
    {
      type: "string",
      name: "clipUrl",
      label: "Skasu Clip URL",
      required: true,
    },
    {
      type: "boolean",
      name: "isExplicit",
      label: "Conteudo explicito",
    },
  ] as TinaField[],
};
