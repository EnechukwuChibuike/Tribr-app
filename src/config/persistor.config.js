import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo/appollo.config";

const PersistGate = ({ children }) => (
   <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default PersistGate;
