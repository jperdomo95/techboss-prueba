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
        <question-form></question-form>
      </v-container>
    </div>
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
          text: 'Añadir material de apoyo',
          href: '/material-de-apoyo'
        }
      ]
    }
  }
}
</script>
