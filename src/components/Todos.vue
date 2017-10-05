<template>
  <div class="todo-container">    
    <ul class="todo-list">
      <li v-for="todo in userTodos">{{todo.title}}</li>
    </ul>
    <button @click="fetchTodos">Fetch Todos</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'allTodos',
      'userTodos'
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
