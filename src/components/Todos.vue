<template>
  <div class="">    
    <p>My name is {{name}}</p>
    <button @click="getTodos">Get Todos</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      name: 'Song'
    }
  },
  methods: {
    ...mapActions([
      'getTodos'
    ])
  }
}
</script>

<style scoped>
</style>
