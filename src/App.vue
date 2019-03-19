<template>
  <v-app>
    <v-navigation-drawer left app v-model="drawer">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Dashboard</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to="item.router">{{ item.title }}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"><v-icon>menu</v-icon></v-toolbar-side-icon>
      <v-toolbar-title>Clubinho</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard', router: '/' },
        { title: 'Cadastrar Evento', icon: 'note_add', router: '/registerEvent' },
        { title: 'Cadastrar Usuário', icon: 'person_add', router: '/registerUser' }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "assets/styles/main.scss";
</style>
