<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      :mini-variant.sync="mini"
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app outlined class="elevation-0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Centro de Ayuda Seif</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    mini: true
  })
}
</script>
