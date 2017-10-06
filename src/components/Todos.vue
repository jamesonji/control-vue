<template>
  <div class="todo-container">   
    
    <md-button class="md-fab md-mini" v-show="!showNewTodoInput" @click="showTodoInput">
      <md-icon>add</md-icon>
    </md-button>
    
    <template class="new-todo-container" v-if="showNewTodoInput">
      <input type="text" v-model="newTodo" class="todo-input"/>
      <md-button class="md-fab md-mini" @click="addNewTodo(newTodo)">
        <md-icon>save</md-icon>
      </md-button>
      <md-button class="md-fab md-clean md-mini" @click="cancelNewTodo">
        <md-icon>close</md-icon>
      </md-button>
    </template>
    
    <ul class="todo-list">
      <li v-for="todo in allTodos">
        <span class="todo" 
              :class="{complete: todo.completed}"
              @click="toggleTodo(todo.id)"
              >
              {{todo.title}}
        </span>
      </li>
    </ul>
    
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
      'allTodos'
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
.todo-list{
  max-height: 500px;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color:#fff;
  border-radius: 15px;
  padding: -10px 10px;
}

ul{
  list-style: none
}
.todo{
  cursor: pointer;
} 

.todo.complete{
  text-decoration: line-through;
  color: grey;
}

.todo-input{
  height: 50px;
  width: 60%;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.2rem;
}

</style>
