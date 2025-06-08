# Portfólio Artista Marea

![Next.js](https://img.shields.io/badge/Next.js-15.0.2-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?logo=tailwind-css)
![TinaCMS](https://img.shields.io/badge/TinaCMS-2.6.0-EC4815)

Portfólio profissional desenvolvido com **Next.js**, **Tailwind CSS** e **TinaCMS**, seguindo os princípios de **Atomic Design** para uma arquitetura de componentes modular e escalável.

## ✨ Recursos Principais

- **Gerenciamento de Conteúdo Visual** com TinaCMS
- **Design Responsivo** com Tailwind CSS
- **Arquitetura Atomic** para componentes reutilizáveis
- **Animações Fluidas** com GSAP
- **Otimizado para SEO** e performance
- **Integração com Cloudinary** para gestão de mídia
- **Formulários funcionais** com EmailJS

## 🚀 Começando

1. Clone o repositório:
```bash
git clone https://github.com/athaydaooo/portfolio-artistamarea.git
cd portfolio-artistamarea
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Acesse o painel de administração em `/admin` para gerenciar o conteúdo.

## 🛠️ Estrutura do Projeto

```
src/
├── components/      # Componentes Atomic Design
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── pages/           # Rotas da aplicação
├── styles/          # Estilos globais
├── lib/             # Utilitários e helpers
└── tina/            # Configuração do CMS
```

## 📦 Dependências Principais

- **Next.js 15** - Framework React
- **Tailwind CSS 3** - Framework CSS utilitário
- **TinaCMS 2** - CMS headless visual
- **GSAP 3** - Biblioteca de animações
- **EmailJS** - Envio de formulários

## 🔧 Scripts Disponíveis

| Comando         | Descrição                          |
|-----------------|------------------------------------|
| `npm run dev`   | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção             |
| `npm run start` | Inicia servidor de produção        |
| `npm run lint`  | Verifica qualidade de código       |
| `npm test`      | Executa testes unitários           |

## 🌟 Próximos Passos

- Implementar modo escuro automático
- Adicionar suporte a múltiplos idiomas
- Otimizar carregamento de imagens
- Expandir seção de blog

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.