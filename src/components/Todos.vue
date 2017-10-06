<template>
  <div class="todo-container">   
    
    <button v-show="!showNewTodoInput" @click="showTodoInput">Add Todo</button> 
    <template class="new-todo-container" v-if="showNewTodoInput">
      <input type="text" v-model="newTodo"/>
      <button @click="addNewTodo(newTodo)">Save</button>
      <button @click="cancelNewTodo">Cancel</button>
    </template>
    
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
  data () {
    return {
      showNewTodoInput: false,
      newTodo: ''
    }
  },
  computed: {
    ...mapGetters([
      'userTodos'
    ])
  },
  methods: {
    showTodoInput () {
      this.showNewTodoInput = true
    },
    addNewTodo (todo) {
      this.showNewTodoInput = false
      this.saveNewTodo(todo)
    },
    cancelNewTodo () {
      this.newTodo = ''
      this.showNewTodoInput = false
    },
    ...mapActions([
      'fetchTodos',
      'toggleTodo',
      'saveNewTodo'
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
