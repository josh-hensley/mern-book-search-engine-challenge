import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                bookCount
                email
                username
                savedBooks {
                    authors
                    bookId
                    description
                    image
                    link
                    title
                }
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($input: UserInput!) {
        addUser(input: $input) {
            token
            user {
                _id
                bookCount
                email
                username
                savedBooks {
                    authors
                    bookId
                    description
                    image
                    link
                    title
                }
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
