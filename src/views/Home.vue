<template>
  <div class="home">
    <v-toolbar outlined color="grey lighten-4" class="elevation-0 d-flex justify-center">
      <v-btn
        filled
        color="primary"
        class="py-5"
      >
        <span>Añadir material de apoyo</span>
      </v-btn>
    </v-toolbar>
    <v-toolbar outlined dense class="elevation-0 d-flex justify-center">
      <span>Nuestros productos</span>
    </v-toolbar>
    <div class="py-5">
      <products-list :products="products"></products-list>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsList from '@/components/ProductsList'
import productsData from '@/data/products'

export default {
  name: 'Home',
  components: { ProductsList },
  data () {
    return {
      products: []
    }
  },
  created () {
    this.products = productsData
  }
}
</script>
