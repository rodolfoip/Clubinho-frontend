import gql from 'graphql-tag'

export const REGISTER_EVENT_MUTATION = gql`
  mutation registerEvent($local: String!, $author: String!){
    registerEvent(
    local: $local,
    author: $author
    ){
      _id
      local
      author
    }
  }
`
export const UPDATE_EVENT_MUTATION = gql`
  mutation updateEvent($id: ID!, $local: String!, $author: String!){
    updateEvent(
    _id: $id,
    local: $local,
    author: $author
    ){
      _id
      local
      author
    }
  }
`

export const GET_ALL_EVENTS = gql`  
  query getAllEvents{
    allEvents{
      _id
      local
      author
    }
  }
`
export const GET_EVENT_BY_ID = gql`
  query eventById($id: ID!){
    eventById(
    _id: $id
    ){
      _id
      local
      author
    }
  }
`
