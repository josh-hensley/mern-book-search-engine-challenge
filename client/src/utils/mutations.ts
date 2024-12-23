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
                    title
                }
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation SaveBook($input: BookInput!) {
        saveBook(input: $input) {
            username
            savedBooks {
                authors
                bookId
                description
                image
                title
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        deleteBook(bookId: $bookId) {
            _id
            savedBooks {
                bookId
                authors
                description
                image
                title
            }
        }
    }
`;
