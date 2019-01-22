import gql from 'graphql-tag'

export const REGISTER_EVENT_MUTATION = gql`
  mutation registerEvent($local: String!, $userId: String!){
    registerEvent(
    local: $local,
    userId: $userId
    ){
      _id
      local
      userId
    }
  }
`
export const UPDATE_EVENT_MUTATION = gql`
  mutation updateEvent($_id: ID!, $local: String!, $userId: String!){
    updateEvent(
    _id: $_id,
    local: $local,
    userId: $userId
    ){
      _id
      local
      userId
    }
  }
`

export const DELETE_EVENT_BY_ID = gql`
  mutation deleteEventById($_id: ID!){
    deleteEventById(
    _id: $_id
    )
  }
`

export const GET_ALL_EVENTS = gql`  
  query getAllEvents{
    allEvents{
      _id
      local
      userId
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
      userId
    }
  }
`
export const GET_EVENTS_BY_USER = gql`
  query eventsByUser($userId: String!){
    eventsByUser(
    userId: $userId
    ){
      _id
      local
      userId
    }
  }
`
export const REGISTER_USER_MUTATION = gql`
  mutation registerUser($name: String!){
    registerUser(
    name: $name
    ){
      _id
      name
    }
  }
`
export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($_id: ID!, $name: String!){
    updateUser(
    _id: $_id,
    name: $name
    ){
      _id
      name
    }
  }
`

export const DELETE_USER_BY_ID = gql`
  mutation deleteUserById($_id: ID!){
    deleteUserById(
    _id: $_id
    )
  }
`

export const GET_ALL_USERS = gql`  
  query getAllUsers{
    allUsers{
      _id
      name
    }
  }
`
export const GET_USER_BY_ID = gql`
  query userById($id: ID!){
    userById(
    _id: $id
    ){
      _id
      name
    }
  }
`
