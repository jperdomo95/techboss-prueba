<template>
  <div class="home">
    <v-toolbar dense outlined color="lighten-5" class="elevation-0 d-flex">
      <v-breadcrumbs :items="navItems">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-toolbar>
    <div class="py-5">
      <v-container>
        <question-form @questionAdded="showModal = true"></question-form>
      </v-container>
    </div>
    <v-dialog
      v-model="showModal"
      width="300"
    >
      <v-card class="d-flex align-center flex-column py-10">
        <v-icon color="success" size="100px">mdi-check-circle-outline</v-icon>
        <span>Pregunta creada</span>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionForm from '@/components/QuestionForm'

export default {
  name: 'Home',
  components: { QuestionForm },
  data () {
    return {
      navItems: [
        {
          text: 'Vista principal',
          href: '/'
        },
        {
          text: 'Añadir material de apoyo'
        }
      ],
      showModal: false
    }
  }
}
</script>
