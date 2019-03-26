<template>
  <div class="update">
    <h1>Editar Evento</h1>
    <form @submit.prevent="updateEvent" novalidate="true">
      <div v-if="event">
        <label for="local">Local do evento</label>
        <input type="text" id="local" v-model="event.local">
      </div>
      <div>
        <label for="user">Usuário</label>
        <select id="user" v-if="allUsers" v-model="event.userId">
          <option :seleted="user._id === event.userId" v-for="(user,key) in allUsers" :key="key" :value="user._id">{{user.name}}</option>
        </select>
      </div>
      <button type="submit">Atualizar</button>
    </form>
    {{event}}
  </div>
</template>
<script>
import { GET_EVENT_BY_ID, GET_ALL_USERS, UPDATE_EVENT_MUTATION } from '../../graphql'

export default {
  data () {
    return {
      event: {},
      allUsers: []
    }
  },
  apollo: {
    event: {
      query: GET_EVENT_BY_ID,
      variables () {
        return { id: this.$route.params.eventId }
      },
      update (data) {
        return data.eventById
      }
    },
    allUsers: {
      query: GET_ALL_USERS
    }
  },
  methods: {
    updateEvent () {
      this.$apollo
        .mutate({
          mutation: UPDATE_EVENT_MUTATION,
          variables: {
            _id: this.event._id,
            local: this.event.local,
            userId: this.event.userId
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
