<template>
  <div class="register">
    <h1>Cadastrar Evento</h1>
    <form @submit.prevent="addEvent" novalidate="true">
      <div>
        <label for="local">Local do evento</label>
        <input type="text" id="local" v-model="event.local">
      </div>
      <div>
        <label for="author">Autor</label>
        <input type="text" id="author" v-model="event.author">
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>
<script>
import { REGISTER_EVENT_MUTATION, GET_ALL_EVENTS } from '../graphql'

export default {
  data () {
    return {
      event: {
        local: '',
        author: ''
      }
    }
  },
  methods: {
    addEvent () {
      this.$apollo
        .mutate({
          mutation: REGISTER_EVENT_MUTATION,
          variables: {
            local: this.event.local,
            author: this.event.author
          },
          update: (store, { data: { registerEvent } }) => {
            const data = store.readQuery({ query: GET_ALL_EVENTS })

            data.allEvents.push(registerEvent)

            store.writeQuery({ query: GET_ALL_EVENTS, data })
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
