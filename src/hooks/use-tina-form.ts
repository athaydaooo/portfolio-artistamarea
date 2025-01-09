import { useCMS, usePlugin } from 'tinacms';
import { useEffect, useState } from 'react';

export function useTinaForm(
  id: string, // Identificador único do formulário
  label: string, // Nome exibido no painel do TinaCMS
  collectionName: string, // Nome da collection (ex: "home")
  fields: any[] // Campos do formulário
) {
  const cms = useCMS();
  const [formData, setFormData] = useState({});

  // Configuração do formulário
  const formConfig = {
    id,
    label,
    fields,
    // Carrega os valores iniciais do conteúdo
    loadInitialValues: async () => {
      const response = await fetch(`/api/content/${collectionName}`);
      const data = await response.json();
      setFormData(data); // Atualiza o estado com os dados carregados
      return data;
    },
    // Salva os valores editados
    onSubmit: async (values) => {
      await fetch(`/api/content/${collectionName}`, {
        method: 'POST',
        body: JSON.stringify(values),
      });
      cms.alerts.success('Conteúdo salvo com sucesso!');
      setFormData(values); // Atualiza o estado com os novos valores
    },
  };

  // Conecta o formulário ao TinaCMS
  usePlugin(formConfig);

  // Atualiza os valores do formulário quando o CMS é ativado
  useEffect(() => {
    if (cms.enabled) {
      formConfig.loadInitialValues();
    }
  }, [cms.enabled]);

  return { formData };
}