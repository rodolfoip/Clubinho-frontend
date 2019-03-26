<template>
  <v-container>
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
  </v-container>
</template>

<script>
import { GET_ALL_USERS } from '../../graphql'

export default {
  name: 'ListUsers',
  data () {
    return {
      allUsers: []
    }
  },
  apollo: {
    allUsers: {
      query: GET_ALL_USERS
    }
  }
}
</script>
