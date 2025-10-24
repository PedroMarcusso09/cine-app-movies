
# 🎬 Catálogo de Filmes

Uma aplicação web full stack que consome uma API pública de filmes, permitindo ao usuário visualizar, favoritar e compartilhar listas de filmes favoritos.

## 🚀 Funcionalidades

- Listagem de filmes a partir da API pública
- Exibição de detalhes do filme (título, sinopse, data, avaliação etc.)
- Adicionar e remover filmes dos favoritos
- Compartilhar lista de favoritos por link
- Interface responsiva e moderna
- Tratamento de erros e feedback visual ao usuário


## 🧩 Stack utilizada

**Front-end:** React, TypeScript, Axios, TailwindCSS, React Router DOM

**Back-end:** Node, Express, Prisma ORM, SQLite


## ⚙️ Instalação

Clone o projeto do GitHub:

```bash
  git clone https://github.com/PedroMarcusso09/cine-app-movies
```
    
## 🚀 Rodando localmente

Entre no diretório do projeto

```bash
  cd cine-app-movies
```

### Back-end

```bash
  cd back-end
  npm install
  npm run dev
```

### Front-end

```bash
  cd front-end
  npm install
  npm run dev
```


## 🌱 Variáveis de Ambiente

Para rodar este projeto, você precisará criar um arquivo `.env` dentro da pasta **back-end** com o seguinte conteúdo:

```bash
  DATABASE_URL="file:./dev.db"
  PORT=4000
  TMDB_API_KEY=SUA_CHAVE_DA_TMDB_AQUI
```

## 🛢️ Banco de Dados

O caminho do banco de dados é definido no arquivo .env:

```bash
  DATABASE_URL="file:./dev.db"
```

Criando o banco e executando as migrações:

```bash
  npx prisma migrate dev
```

Visualizando os dados:

```bash
  npx prisma studio
```

## 🧪 Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```