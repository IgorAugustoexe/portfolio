# Regras do projeto

## Objetivo

- Construir um portfólio pessoal simples, intuitivo e fácil de ampliar.
- Usar o projeto `vcard-personal-portfolio` somente como referência de disposição dos elementos e responsividade.
- Manter a identidade visual centralizada para permitir ajustes posteriores sem reescrever os componentes.

## Tecnologia

- Usar Next.js com App Router, React e TypeScript.
- Usar Styled Components para toda a estilização da aplicação.
- Usar somente os ícones gratuitos do Font Awesome por meio do componente compartilhado `AppIcon`.
- Manter cores, fontes, espaçamentos, sombras, bordas e breakpoints no tema compartilhado.
- Não criar `Router.tsx`; as rotas são definidas pela pasta `src/app`.
- Organizar o conteúdo das páginas em `src/app/pages`; não criar a pasta `features`.

## Conteúdo e dados

- Todos os dados são locais e mockados.
- Não conectar API, banco de dados, Firebase, CMS ou autenticação.
- Modelar projetos, habilidades, experiências e contatos com tipos TypeScript.
- Renderizar listas a partir dos dados locais para que novos itens sejam adicionados sem duplicar componentes.
- Manter português e inglês, com segmentos técnicos das rotas sempre em inglês.

## Rotas

- Usar os prefixos `/pt` e `/en`.
- Representar os idiomas com a pasta dinâmica `src/app/[locale]`.
- Disponibilizar `about`, `resume` e `projects` nos dois idiomas.
- Usar `src/app/[locale]/projects/[slug]` para os detalhes de cada projeto.
- Traduzir os nomes visíveis do menu conforme o idioma selecionado.
- Manter os segmentos técnicos das URLs em inglês nos dois idiomas.
- Manter os arquivos obrigatórios `page.tsx` do Next apenas como pontos de entrada.
- Colocar a implementação de cada rota em um arquivo com nome descritivo, como `AboutPage.tsx`, `ResumePage.tsx` ou `ProjectsPage.tsx`.

## Interface

- Manter um fundo estrelado discreto em componente próprio, com movimento lento, brilho assíncrono e suporte a `prefers-reduced-motion`.
- No desktop, manter a sidebar à esquerda visível com `position: sticky` durante a rolagem da página.
- Apresentar a sidebar como faixa de identidade com divisor, sem card fechado.
- Exibir e-mail, LinkedIn e GitHub na sidebar.
- Manter LinkedIn e GitHub como links externos clicáveis dentro da lista de contatos.
- Posicionar a navegação em um bloco escuro arredondado no topo direito do conteúdo.
- Deixar o conteúdo principal integrado ao fundo estrelado, usando cards apenas nas seções internas.
- Criar o planeta e a órbita da home com Styled Components, de forma decorativa e sutil.
- Usar um switch de idioma marcado para PT e desmarcado para EN, preservando a página atual na troca.
- Manter dimensões fixas nos itens da navegação e no seletor para evitar saltos visuais ao trocar o idioma.
- Não criar rolagem interna no painel direito; a rolagem deve pertencer à página.
- Reservar permanentemente o espaço da barra de rolagem para evitar deslocamentos laterais entre páginas curtas e longas.
- Permitir que o painel direito cresça de acordo com o conteúdo.
- Usar nos dois painéis somente uma altura mínima compartilhada no desktop.
- No mobile, empilhar perfil e conteúdo na rolagem normal da página, mantendo a navegação fixa no rodapé.
- Em tablets e celulares, fazer a sidebar ocupar toda a largura e transformar a navegação em abas fixas no rodapé.
- Em tablets e celulares, apresentar perfil e seletor PT/EN em uma faixa compacta no topo.
- Reservar espaço inferior para que as abas do rodapé não cubram o conteúdo.
- Exibir a autoria e o objetivo do projeto na sidebar do desktop, abaixo dos contatos, e no rodapé do conteúdo no mobile.
- Manter margens visíveis ao redor do portfólio; o layout não deve ocupar 100% da altura da janela.
- No mobile, deixar a altura ser determinada pelo conteúdo, sem altura fixa baseada na janela.
- Manter textos principais com pelo menos 16px e controles apropriados para toque e teclado.
- Criar componentes compartilhados somente quando houver reutilização real.

## Assets

- Armazenar avatar e imagens dos projetos em `src/assets/images`.
- Manter o favicon em `src/app/favicon.ico`, seguindo a convenção de metadados do Next.
- Importar as imagens nos arquivos de dados em vez de manter caminhos de texto para `public`.

## Projetos

- Cada projeto deve ter título, slug, tecnologias, descrição, imagens, desafios e aprendizados.
- Filtrar os projetos localmente por Todos, Mobile, Desenvolvimento Web e Projetos Acadêmicos.
- A página de detalhes deve mostrar descrição e tecnologias ao lado do carrossel no desktop.
- Desafios e aprendizados devem ficar lado a lado no desktop e empilhados no mobile.

## Escopo

- Não criar testes.
- Não criar scripts personalizados de validação.
- Manter somente os scripts essenciais para desenvolver, compilar e executar o Next.js.
- Não editar o `README.md` até uma solicitação explícita.
