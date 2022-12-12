import { IResolvers } from "mercurius";

import Mutation from './Mutation';
import Query from './Query';

const resolvers: IResolvers = {
  Query,
  Mutation
};

export default resolvers;