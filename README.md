## 1. Tecnologias
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://zod.dev/)
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)

## 2. Documentação
- [Insomnia]()

## 3. Início Rápido

1. Clone o projeto em sua máquina e instale as dependências com o comando:
```shell
yarn
```

2. Crie um arquivo **.env** e suas variáveis seguindo o modelo do **.env.example**:
```
cp .env.example .env
```

3. Crie as migrações com o comando:
```
yarn typeorm migration:generate ./src/migrations/finalMigration -d ./src/data-source
```

4. Rode as migrações com o comando:
```
yarn typeorm migration:run -d src/data-source.ts
```

5. Inicie o servidor com o comando:
```
yarn run dev
```