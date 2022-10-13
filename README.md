In this project we use yarn. If you use npm please remove the file `yarn.lock` then run `npm i`

### Command to run:

```
git clone https://github.com/codewithmecoder/crud-express-prisma-typescript
cd crud-express-prisma-typescript
yarn // install the deps

yarn dev // start the application listen on port 4000 or from the process.env.PORT
yarn docker:up // fire up the product db container in docker
yarn docker:down // destroy the product db container in docker
yarn docker:up:test // fire up the test db container in docker
yarn docker:down:test // destroy the test db container in docker
yarn test // run jest test
yarn prod // build ts to js in product,
yarn seeding // add default data
```

### Tech

- Node.js
- Express.js
- Prisma ORM
- Docker
- Postgres
- Jest testing
- swagger api documents
