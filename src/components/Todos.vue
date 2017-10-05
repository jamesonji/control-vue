<template>
  <div class="todo-container">    
    <p>My name is {{name}}</p>
    <ul class="todo-list">
      <li v-for="todo in allTodos">{{todo.title}}</li>
    </ul>
    <button @click="fetchTodos">Fetch Todos</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      name: 'Song'
    }
  },
  computed: {
    ...mapGetters([
      'allTodos'
    ])
  },
  methods: {
    ...mapActions([
      'fetchTodos'
    ])
  }
}
</script>

<style scoped>
</style>
