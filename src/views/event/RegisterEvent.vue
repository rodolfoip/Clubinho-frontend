<template>
  <v-container>

    <div class="register">
      <h1>Cadastrar Evento</h1>
      <form @submit.prevent="addEvent" novalidate="true">
        <div>
          <label for="local">Local do evento</label>
          <input type="text" id="local" v-model="event.local">
        </div>
        <div>
          <label for="user">Autor</label>
          <select id="user" v-if="allUsers" v-model="event.userId">
            <option selected>Open this select menu</option>
            <option v-for="(user,key) in allUsers" :key="key" :value="user._id">{{user.name}}</option>
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <v-form v-model="valid">
        <v-text-field v-model="event.local" :rules="v => !!v || 'Campo é obrigatório'" required label="Local do evento"></v-text-field>
        <v-select :items="allUsers" item-text="name" item-value="_id"
                  v-model="event.userId"
                  :rules="v => !!v || 'Campo é obrigatório'" required
                  label="Responsável">
        </v-select>
      </v-form>
    </div>
  </v-container>
</template>
<script>
import { GET_ALL_EVENTS, REGISTER_EVENT_MUTATION, GET_ALL_USERS } from '../../graphql'

export default {
  data () {
    return {
      event: {
        local: '',
        userId: ''
      },
      allUsers: [],
      formConfig: {
        valid: true
      }
    }
  },
  apollo: {
    allUsers: {
      query: GET_ALL_USERS
    }
  },
  methods: {
    addEvent () {
      this.$apollo
        .mutate({
          mutation: REGISTER_EVENT_MUTATION,
          variables: {
            local: this.event.local,
            userId: this.event.userId
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
