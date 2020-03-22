import { gql } from "apollo-boost";

export const LOGIN_USER = gql`
   mutation onLogin($email: String!, $password: String!) {
      loginUser(data: { email: $email, password: $password })
   }
`;

export const CREATE_USER = gql`
   mutation onCreateUser(
      $username: String!
      $email: String!
      $password: String!
      $phone: String!
   ) {
      createUser(
         data: {
            username: $username
            email: $email
            password: $password
            phone: $phone
         }
      )
   }
`;
