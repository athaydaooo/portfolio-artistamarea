import { TinaField } from 'tinacms';

// Função para gerar o estado inicial com base nos campos da collection
export function initTinaFields(fields: TinaField[]) {
  const content: Record<string, any> = {};

  fields.forEach((field) => {
    switch (field.type) {
      case 'boolean':
        content[field.name] = false; // Valor inicial para campos booleanos
        break;
      case 'number':
        content[field.name] = 0; // Valor inicial para campos numéricos
        break;
      case 'object':
        content[field.name] = {}; // Valor inicial para campos de objeto
        break;
      default:
        content[field.name] = ''; // Valor padrão para campos de texto, imagem, etc.
    }
  });

  return content;
}