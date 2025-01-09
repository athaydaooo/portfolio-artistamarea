'use client';

import { useCMS } from 'tinacms';
import { useSession } from 'next-auth/react';

export default function CmsButton() {
  const cms = useCMS();
  const { data: session } = useSession();

  // Verifica se o usuário está logado e autorizado
  if (!session) {
    return null; // Não mostra o botão se o usuário não estiver logado
  }

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
      <button
        onClick={() => cms.toggle()}
        style={{
          padding: '10px 20px',
          backgroundColor: cms.enabled ? 'red' : 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {cms.enabled ? 'Sair do Modo Edição' : 'Editar Conteúdo'}
      </button>
    </div>
  );
}