<template>
  <div class="update">
    <h1>Editar Evento</h1>
    <form @submit.prevent="updateEvent" novalidate="true">
      <div v-if="event">
        <label for="local">Local do evento</label>
        <input type="text" id="local" v-model="event.local">
      </div>
      <div>
        <label for="author">Autor</label>
        <input type="text" id="author" v-model="event.author">
      </div>
      <button type="submit">Atualizar</button>
    </form>
  </div>
</template>
<script>
import { GET_EVENT_BY_ID, UPDATE_EVENT_MUTATION } from '../graphql'

export default {
  data () {
    return {
      event: {}
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
    }
  },
  methods: {
    updateEvent () {
      this.$apollo
        .mutate({
          mutation: UPDATE_EVENT_MUTATION,
          variables: {
            id: this.event._id,
            local: this.event.local,
            author: this.event.author
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
