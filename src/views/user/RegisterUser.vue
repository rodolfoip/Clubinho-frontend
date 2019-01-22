<template>
  <div class="register">
    <h1>Cadastrar Usuário</h1>
    <form @submit.prevent="addUser" novalidate="true">
      <div>
        <label for="local">Nome</label>
        <input type="text" id="local" v-model="user.name">
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>
<script>
import { REGISTER_USER_MUTATION, GET_ALL_USERS } from '../../graphql'

export default {
  data () {
    return {
      user: {
        name: ''
      }
    }
  },
  methods: {
    addUser () {
      this.$apollo
        .mutate({
          mutation: REGISTER_USER_MUTATION,
          variables: {
            name: this.user.name
          },
          update: (store, { data: { registerUser } }) => {
            const data = store.readQuery({ query: GET_ALL_USERS })

            data.allUsers.push(registerUser)

            store.writeQuery({ query: GET_ALL_USERS, data })
          }
        })
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
