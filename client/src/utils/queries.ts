import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
        _id
        email
        password
        savedBooks {
            _id
            authors
            bookId
            createdAt
            description
            image
            link
            title
        }
        username
    }
}
`;
