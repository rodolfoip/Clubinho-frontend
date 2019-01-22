<template>
  <div class="update">
    <h1>Editar Evento</h1>
    <form @submit.prevent="updateUser" novalidate="true">
      <div v-if="user">
        <label for="local">Nome</label>
        <input type="text" id="local" v-model="user.name">
      </div>
      <button type="submit">Atualizar</button>
    </form>
    {{user}}
  </div>
</template>
<script>
import { GET_USER_BY_ID, UPDATE_USER_MUTATION } from '../../graphql'

export default {
  data () {
    return {
      user: {}
    }
  },
  apollo: {
    user: {
      query: GET_USER_BY_ID,
      variables () {
        return { id: this.$route.params.userId }
      },
      update (data) {
        return data.userById
      }
    }
  },
  methods: {
    updateUser () {
      this.$apollo
        .mutate({
          mutation: UPDATE_USER_MUTATION,
          variables: {
            _id: this.event._id,
            name: this.event.name
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
