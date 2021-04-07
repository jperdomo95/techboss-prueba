const rulesMixin = {
  data () {
    return {
      rules: {
        product: v => !!(v || '') || 'Por favor seleccione un producto',
        module: v => !!(v || '') || 'Por favor seleccione un módule',
        category: v => !!(v || '') || 'Por favor seleccione una categoría',
        environment: v => !!(v || '') || 'Por favor seleccione un entorno',
        question: v => !!(v || '') || 'Por favor introduzca una pregunta',
        answer: v => !!(v || '') || 'Por favor introduzca una respuesta'
      }
    }
  }
}

export default rulesMixin
