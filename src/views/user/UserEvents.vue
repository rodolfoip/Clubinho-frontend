<template>
  <div class="user__events">
    <h2>{{user.name}}</h2>
    <ul v-if="allEvents">
      <li v-for="(event, key) in allEvents" :key="key">
        {{event.local}}
      </li>
    </ul>
  </div>
</template>

<script>
import { GET_EVENTS_BY_USER, GET_USER_BY_ID } from '../../graphql'

export default {
  data () {
    return {
      user: {},
      allEvents: []
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
    },
    allEvents: {
      query: GET_EVENTS_BY_USER,
      variables () {
        return { userId: this.$route.params.userId }
      },
      update (data) {
        return data.eventsByUser
      }
    }
  }
}
</script>
