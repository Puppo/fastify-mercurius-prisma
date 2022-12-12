import { QueryResolvers } from "../../graphql/generated";

const Hello: QueryResolvers['Hello'] = (_) => 'Hello world!';

export default Hello;