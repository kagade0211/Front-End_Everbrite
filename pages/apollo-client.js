import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "QmcR79Fz3dEnF2txtfDfTt334jKpdCf8rT7bky71GvJ9Tr",
  cache: new InMemoryCache(),
});

export default client;