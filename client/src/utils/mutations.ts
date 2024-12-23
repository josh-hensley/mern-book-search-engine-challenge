import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
            _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation createUser($input: UserInput!) {
        createUser(input: $input) {
            token
            user {
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
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput!) {
        saveBook(input: $input) {
            bookId
            title
            authors
            description
            image
            link
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($id: ID!) {
        removeBook(_id: $id) {
            _id
            title
        }
    }
`;
