import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { CONFIG_APOLLO_URL } from "./variables";

let apolloInstance: ApolloClient<NormalizedCacheObject> | null = null;

export const Apollo = (): ApolloClient<NormalizedCacheObject> => {
  if (apolloInstance === null) {
    apolloInstance = new ApolloClient({
      uri: CONFIG_APOLLO_URL,
      cache: new InMemoryCache(),
    });
  }

  return apolloInstance;
};
