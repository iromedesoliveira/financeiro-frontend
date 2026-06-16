Financeiro Dashboard - Frontend
🎯 Visão do Produto
Interface administrativa de alta performance desenvolvida para consumir o Financeiro Core Service. Esta aplicação foi projetada para oferecer uma experiência de usuário (UX) fluida, intuitiva e segura, permitindo o gerenciamento completo de transações financeiras com foco em integridade e clareza visual.

🚀 Tecnologias e Ferramentas
Linguagem: TypeScript (Garante segurança e escalabilidade no desenvolvimento).

Framework: React 18 + Vite (Stack moderna para builds ultra rápidos).

Comunicação: Axios (Interceptors para gestão de JWT).

Gerenciamento de Estado: [Zustand / Context API].

Estilização: [Tailwind CSS / Styled Components].

Qualidade de Código: ESLint + Prettier + Husky (pré-commit hooks).

🛠 Arquitetura e Diferenciais
Arquitetura Orientada a Componentes: Estrutura atômica que prioriza a reutilização e facilita a manutenção a longo prazo.

Segurança Integrada: Implementação de Axios Interceptors que injetam automaticamente o token JWT no cabeçalho Authorization, garantindo comunicação stateless e protegida.

UX/UI Focado no Usuário: Layout responsivo (Mobile-First) e feedback visual para transações, garantindo usabilidade em qualquer dispositivo.

Tratamento de Erros: Interceptação centralizada de erros HTTP (401, 403, 500), proporcionando notificações claras ao usuário final.

📂 Estrutura do Projeto
Plaintext
src/
├── assets/          # Recursos estáticos (Imagens, ícones, logos)
├── components/      # Componentes UI reutilizáveis (Buttons, Cards, Modals)
├── hooks/           # Hooks customizados para lógica de negócio
├── pages/           # Páginas principais (Dashboard, Login, Lançamentos)
├── services/        # Configuração de API (Axios instance, Auth service)
├── store/           # Gerenciamento de estado global
├── utils/           # Funções utilitárias (Formatadores de moeda/data)
└── types/           # Definições de tipos TypeScript (Interfaces de dados)
⚙️ Configuração de Ambiente
Para rodar a aplicação, crie um arquivo .env na raiz do projeto baseado no modelo .env.example:

Snippet de código
VITE_API_BASE_URL=http://localhost:8082
VITE_APP_TITLE=Financeiro Core Dashboard
📋 Como Rodar o Projeto
Clonar o repositório:

Bash
git clone https://github.com/iromedesoliveira/financeiro-frontend.git
Instalar dependências:

Bash
npm install
Rodar em modo de desenvolvimento:

Bash
npm run dev
📈 Roadmap de Desenvolvimento
Fase 1: Configuração e Fundação Técnica

[x] Setup do Ambiente: Instalação do Vite, TypeScript e configuração de ESLint/Prettier.
[x] Arquitetura de Pastas: Definição da estrutura base para facilitar a escala.
[x] Configuração de Rotas: Implementação do React Router com rotas públicas e privadas.

Fase 2: Autenticação e Camada de Serviço

[x] Client de API (Axios): Instância base e Interceptors para injeção de JWT.
[x] Serviço de Auth: Funções para Login, Logout e validação de sessão.
[x] Segurança de Rotas: Componentes de proteção de acesso.

Fase 3: Integração com Core Service (CRUD)

[ ] Listagem de Transações: Tabela responsiva com consumo da API /lancamentos.
[ ] Gestão de Formulários: Cadastro e edição com validação de campos.
[ ] Tratamento de Dados: Formatadores para valores monetários e datas.

Fase 4: Experiência do Usuário (UX) e Dashboards

[ ] Visualização de Dados: Gráficos de saldo e distribuição por categorias.
[ ] Feedback e Notificações: Implementação de Toasts de sucesso/erro.
[ ] Estados de Carregamento: Adição de Skeletons/Spinners para melhor UX.

Fase 5: Otimização e Entrega Final

[ ] Otimização de Performance: Lazy Loading e memoization.
[ ] Testes de Integração: Testes unitários para componentes críticos.
[ ] Deploy e CI/CD: Pipeline de deploy automatizado.

✒️ Autor
Iromedes C. de Oliveira - Desenvolvedor Full Stack Sênior