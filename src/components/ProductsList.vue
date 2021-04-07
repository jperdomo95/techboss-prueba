<template>
  <div class="d-flex justify-center">
    <v-container>
      <v-row>
        <v-col
          cols="4"
          v-for="(product, i) in products"
          :key="i"
        >
          <v-card
            class="py-5"
            elevation="5"
            outlined
          >
            <div class="d-flex flex-column justify-center align-center">
              <v-icon
                large
                class="mb-2"
              >
                mdi-domain
              </v-icon>
              <span class="mb-2">{{ product.name }}</span>
              <v-btn
                class="px-10"
                elevation="2"
                rounded
              >Ver</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductsList',
  // components: { ProductDetail },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>
