<template>
  <div class="todo-container">    
    <ol class="todo-list">
      <li v-for="todo in userTodos">
        <span class="todo" 
              :class="{complete: todo.completed}"
              @click="toggleTodo(todo.id)"
              >
              {{todo.title}}
        </span>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'userTodos'
    ])
  },
  methods: {
    ...mapActions([
      'fetchTodos',
      'toggleTodo'
    ])
  },
  beforeMount () {
    this.fetchTodos()
  }
}
</script>

<style scoped>
  .todo{
    cursor: pointer;
  } 
  
  .todo.complete{
    text-decoration: line-through;
  }
</style>
