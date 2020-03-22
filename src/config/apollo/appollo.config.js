import ApolloClient, { InMemoryCache } from "apollo-boost";
import { SERVER_URL } from "../../constants/endpoints.constants";
import { ToastMessage, type } from "../../helpers/toaster/Toastr.helper";

// setup a new cache memory
const cache = new InMemoryCache();

//get the token
const token = sessionStorage.getItem("tribr_token") || "";

// setup apollo client
const client = new ApolloClient({
   uri: SERVER_URL,
   cache,
   headers: {
      authorization: token
   },
   onError: ({ graphQLErrors, networkError, operation }) => {
      if (
         graphQLErrors &&
         operation.query.definitions[0].operation === "mutation"
      ) {
         graphQLErrors.map(({ message }) => ToastMessage(type.ERROR, message));
         return false;
      }
      if (
         networkError &&
         operation.query.definitions[0].operation === "mutation"
      ) {
         return ToastMessage(type.ERROR, "Network Error!");
      }
   }
});

export default client;
