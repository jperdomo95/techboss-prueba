<template>
  <v-card>
    <v-toolbar color="headforms" class="elevation-0 primary--text d-flex justify-center">Material de apoyo</v-toolbar>
    <v-form class="mt-5" ref="questionForm" @submit.prevent="submitQuestion">
      <v-container>
        <v-row class="mb-0">
          <v-col cols="1">
            <v-subheader>Producto*</v-subheader>
          </v-col>
          <v-col cols="5">
            <v-select
              v-model="question.product"
              :items="products"
              item-text="name"
              item-value="name"
              label="Selecciona el producto"
              dense
              outlined
              :rules="[rules.product]"
            ></v-select>
          </v-col>
          <v-col cols="1">
            <v-subheader>Módulo*</v-subheader>
          </v-col>
          <v-col cols="5">
            <v-select
              v-model="question.module"
              :items="modules"
              item-text="name"
              item-value="name"
              label="Selecciona el módulo"
              dense
              outlined
              :rules="[rules.module]"
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="mb-0">
          <v-col cols="1">
            <v-subheader>Categoría*</v-subheader>
          </v-col>
          <v-col cols="5">
            <v-select
              v-model="question.category"
              :items="categories"
              item-text="name"
              item-value="name"
              label="Selecciona la categoría"
              dense
              outlined
              :rules="[rules.category]"
            ></v-select>
          </v-col>
          <v-col cols="1">
            <v-subheader>Entorno*</v-subheader>
          </v-col>
          <v-col cols="5">
            <v-select
              v-model="question.environment"
              :items="environments"
              item-text="name"
              item-value="name"
              label="Selecciona el entorno"
              dense
              outlined
              :rules="[rules.environment]"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              class="ml-3"
              v-model="question.question"
              label="Pregunta*"
              outlined
              :rules="[rules.question]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              class="ml-3"
              v-model="question.answer"
              label="Respuesta*"
              outlined
              rows="3"
              :rules="[rules.answer]"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center mb-5">
          <v-btn color="primary" class="mr-5" type="submit">Añadir</v-btn>
          <v-btn to="/">Cancelar</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import rulesMixin from '@/mixins/rulesMixin.js'
export default {
  mixins: [rulesMixin],
  data () {
    return {
      question: {
        product: '',
        module: '',
        category: '',
        environment: '',
        question: '',
        answer: ''
      }
    }
  },
  computed: {
    ...mapGetters(['products', 'modules', 'categories', 'environments'])
  },
  methods: {
    ...mapActions(['addQuestion']),
    submitQuestion () {
      if (this.$refs.questionForm.validate()) {
        this.addQuestion(this.question)
        this.$emit('questionAdded')
        this.$refs.questionForm.reset()
      }
    }
  }
}
</script>
