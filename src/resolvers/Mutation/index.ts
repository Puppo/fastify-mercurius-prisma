
import { MutationResolvers } from '../../graphql/generated';
import add from './add';

const Mutation: MutationResolvers =  {
  add,
};

export default Mutation;