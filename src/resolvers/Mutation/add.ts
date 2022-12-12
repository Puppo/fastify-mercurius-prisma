import { MutationResolvers } from "../../graphql/generated";

const add: MutationResolvers['add'] = (_, { x, y }) => x + y;

export default add;