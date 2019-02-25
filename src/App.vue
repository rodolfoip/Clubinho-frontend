<template>
  <div id="app">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      hide-overlay
      stateless
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://www.placecage.com/gif/85/85">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Nicolas Cage</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                icon
                @click.stop="mini = !mini"
              >
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/registerEvent">Cadastrar Evento</router-link>
      |
      <router-link to="/registerUser">Cadastrar Usuário</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Ver Eventos', icon: 'dashboard' },
        { title: 'Cadastrar usuário', icon: 'person_add' }
      ],
      mini: true,
      right: null
    }
  }
}
</script>

<style lang="scss">
  @import "assets/styles/main.scss";
</style>
