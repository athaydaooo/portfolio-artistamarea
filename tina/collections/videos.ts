import AspectRatio from "@/types/aspect-ratio.ts";
import enumToOptions from "@/utils/enum-to-options.ts";
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
      name: "videos",
      label: "Videos",
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
          type: "string",
          name: "videoUrl",
          label: "Video",
          required: true,
        },
        {
          type: "boolean",
          name: "isExplicit",
          label: "Conteudo explicito",
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
