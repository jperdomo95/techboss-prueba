<template>
  <div class="home">
    <v-toolbar outlined color="grey lighten-5" class="elevation-0 d-flex">
      <v-btn
        filled
        color="primary"
        class="py-5"
        to="/material-de-apoyo"
      >
        <span>Añadir material de apoyo</span>
      </v-btn>
    </v-toolbar>
    <v-toolbar outlined dense class="elevation-0 d-flex justify-center">
      <span>Nuestros productos</span>
    </v-toolbar>
    <div class="py-5">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['products'])
  }
}
</script>
