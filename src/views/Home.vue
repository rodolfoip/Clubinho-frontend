<template>
  <div class="home">
    <ul v-if="allEvents">
      <li :key="key" v-for="(event,key) in allEvents">
        <div v-if="event">
          {{event.local}} | {{event.author}}
        </div>
        <br>
        <br>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { GET_ALL_EVENTS } from '../graphql'

export default {
  name: 'home',
  data () {
    return {
      allEvents: []
    }
  },
  apollo: {
    allEvents: {
      query: GET_ALL_EVENTS
    }
  },
  methods: {}
}
</script>
