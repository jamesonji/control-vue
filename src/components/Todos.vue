<template>
  <div class="todo-container">   
    <div class="todo-control">
      <md-button id="new-todo-button" class="md-fab md-mini" v-show="!showNewTodoInput" @click="showTodoInput">
        <md-icon>add</md-icon>
      </md-button>
      
      <div class="new-todo-container" v-if="showNewTodoInput">
        <input type="text" v-model="newTodo" class="todo-input" placeholder="Enter new todo"/>
        
        <md-button class="md-fab md-primary md-mini" @click="addNewTodo(newTodo)">
          <md-icon>save</md-icon>
        </md-button>
        
        <md-button class="md-fab md-clean md-mini" @click="cancelNewTodo">
          <md-icon>close</md-icon>
        </md-button>
      </div>
    </div>
    
    <div class="todo-list-container">
      <transition-group name="todo">
        <div class="todo-list" v-for="todo in allTodos" :key="todo.id">
          <span class="todo" 
                :class="{complete: todo.completed}"
                @click="toggleTodo(todo.id)"
                >
                {{todo.title}}
          </span>
        </div>
      </transition-group>
    </div>
    
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
      this.newTodo = ''
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
.todo-control{
  width: 600px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.new-todo-container{
  width: 80%;
}
.todo-list-container{
  margin-top: 15px;
  max-height: 450px;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color:#fff;
  border-radius: 15px;
}
.todo-list{
  padding: 20px;
  height: 40px;
  border-bottom: 1px solid #b2cfe8;
}
.todo{
  cursor: pointer;
  font-size: 20px;
} 

.todo.complete{
  text-decoration: line-through;
  color: grey;
}

.todo-input{
  height: 50px;
  width: 70%;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.2rem;
}

/* Transitions */

.todo-enter-active {
  transition: all 1.3s ease;
}
.todo-enter, .todo-leave-to{
  transform: translateX(-10px);
  opacity: 0;
}
</style>
