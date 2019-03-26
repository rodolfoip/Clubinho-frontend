<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container>
    <div class="home">
      <h2>Eventos</h2>
      <v-data-table :headers="dataTableHeaders" :items="allEvents" rows-per-page-text="Itens por página">
        <template v-slot:items="props">
          <td>{{props.item.local}}</td>
          <td>{{props.item.userId}}</td>
          <td>
            <v-btn small fab color="info" :to="{name:'updateEvent',params:{eventId:props.item._id}}">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn small fab :loading="loading" :disabled="loading" color="danger" @click="deleteEvent(props.item._id)">
              <v-icon>delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { GET_ALL_EVENTS, DELETE_EVENT_BY_ID } from '../graphql'

export default {
  name: 'home',
  data () {
    return {
      allEvents: [],
      dataTableHeaders: [
        { text: 'Local', value: 'local' },
        { text: 'Id responsável', value: 'userId', sortable: false },
        { text: 'Ações', value: '_id', sortable: false }
      ],
      loading: null
    }
  },
  apollo: {
    allEvents: {
      query: GET_ALL_EVENTS
    }
  },
  methods: {
    deleteEvent (_id) {
      let self = this

      self.loading = true
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
          self.loading = null
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
