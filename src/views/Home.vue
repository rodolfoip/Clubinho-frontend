<template>
  <div class="home">
    <h2>Eventos</h2>
    <ul v-if="allEvents">
      <li :key="key" v-for="(event,key) in allEvents">
        <div v-if="event">
          {{event.local}} | {{event.userId}}
          <router-link :to="{name:'updateEvent',params:{eventId:event._id}}">Editar</router-link>
          <button @click="deleteEvent(event._id)">Deletar</button>
        </div>
        <br>
        <br>
      </li>
    </ul>
    <h2>Usuários</h2>
    <ul v-if="allUsers">
      <li :key="key" v-for="(user,key) in allUsers">
        <div v-if="user">
          {{user.name}}
          <router-link :to="{name:'updateUser',params:{userId:user._id}}">Editar</router-link>
          |
          <router-link :to="{name:'viewEventsUser',params:{userId:user._id}}">Ver</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { GET_ALL_EVENTS, DELETE_EVENT_BY_ID, GET_ALL_USERS } from '../graphql'

export default {
  name: 'home',
  data () {
    return {
      allEvents: [],
      allUsers: []
    }
  },
  apollo: {
    allEvents: {
      query: GET_ALL_EVENTS
    },
    allUsers: {
      query: GET_ALL_USERS
    }
  },
  methods: {
    deleteEvent (_id) {
      this.$apollo
        .mutate({
          mutation: DELETE_EVENT_BY_ID,
          variables: {
            _id: _id
          },
          update: (store, { data: { deleteEventById } }) => {
            const data = store.readQuery({ query: GET_ALL_EVENTS })

            data.allEvents = data.allEvents.filter((e) => e._id !== _id)

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
