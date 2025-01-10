import { TinaField } from "tinacms";

export const sobreMimCollection = {
    name: "sobre_mim",
    label: "Sobre Mim",
    path: "content/sobre-mim",
    ui: {
        router: ({ document }: { document: { _sys: { filename: string } } }) => `/sobre-mim`,
    },
    fields: [
        {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,

        },
        {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
    ] as TinaField[],
}