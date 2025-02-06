import AspectRatio from "@/types/aspect-ratio.ts";
import enumToOptions from "@/utils/enum-to-options.ts";
import { TinaField } from "tinacms";

export const oUltimoFrameCollection = {
  name: "oultimoframe",
  label: "O Ultimo Frame",
  path: "content/oultimoframe",
  ui: {
    router: () => `/o-ultimo-frame`,
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
      name: "roles",
      label: "Papéis",
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
          type: "boolean",
          name: "hasSubtitle",
          label: "Subtitulo",
          required: true,
        },
        {
          type: "object",
          name: "members",
          label: "Integrantes",
          required: true,
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item.name };
            },
            visualSelector: true,
            min: 1,
            max: 20,
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Nome",
              required: true,
            },
            {
              type: "string",
              name: "subtitle",
              label: "Subtitulo",
            },
          ] as TinaField[],
        },
      ] as TinaField[],
      required: true,
    },
    {
      type: "string",
      name: "filmUrl",
      label: "O Ultimo Frame",
      required: true,
    },
    {
      type: "boolean",
      name: "isExplicit",
      label: "Conteudo explicito",
    },
  ] as TinaField[],
};
