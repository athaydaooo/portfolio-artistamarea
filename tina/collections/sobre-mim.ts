import { Field, TinaField } from 'tinacms';

export const sobreMimCollection = {
  label: 'Home', // Nome exibido no painel do TinaCMS
  name: 'home', // Identificador único da collection
  path: 'content/home', // Pasta onde os arquivos de conteúdo serão salvos
  fields: [
    {
      type: "string", // Tipo do campo (texto)
      label: 'Título', // Nome exibido no painel
      name: 'title', // Identificador único do campo
    },
    {
      type: 'image', // Tipo do campo (imagem)
      label: 'Imagem de Destaque', // Nome exibido no painel
      name: 'featuredImage', // Identificador único do campo
    },
  ] as TinaField[], // Tipagem dos campos
};

export default sobreMimCollection 