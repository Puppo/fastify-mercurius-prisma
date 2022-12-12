import fastify from "fastify";
import { buildSchema } from "graphql";
import mercurius from "mercurius";
import mercuriusCodegen, { codegenMercurius, CodegenMercuriusOptions, loadSchemaFiles } from 'mercurius-codegen';

import resolvers from './resolvers';

export const app = fastify({
  logger: true,
});


const codegenMercuriusOptions: CodegenMercuriusOptions = {
  targetPath: './src/graphql/generated.ts',
  operationsGlob: './src/graphql/operations/*.gql',
  watchOptions: {
    enabled: process.env.NODE_ENV === 'development',
  },
}

const { schema } = loadSchemaFiles('src/graphql/schema/**/*.gql', {
  watchOptions: {
    enabled: process.env.NODE_ENV === 'development',
    onChange(schema) {
      app.graphql.replaceSchema(buildSchema(schema.join('\n')))
      app.graphql.defineResolvers(resolvers)

      codegenMercurius(app, codegenMercuriusOptions).catch(console.error)
    },
  },
});

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
});

mercuriusCodegen(app, codegenMercuriusOptions).catch(console.error);