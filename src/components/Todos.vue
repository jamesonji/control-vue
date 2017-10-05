<template>
  <div class="todo-container">    
    <ol class="todo-list">
      <li v-for="todo in userTodos">
        <span class="todo-title" 
              :class="{complete: todo.completed}"
              @click="toggleTodo(todo.id)"
              >
              {{todo.title}}
        </span>
      </li>
    </ol>
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
      'fetchTodos',
      'toggleTodo'
    ])
  }
}
</script>

<style scoped>
  .todo-title.complete{
    text-decoration: line-through;
  }
</style>
