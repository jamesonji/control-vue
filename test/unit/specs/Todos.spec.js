// import Vue from 'vue'
import Todos from '../../../src/components/Todos.vue'

describe('Todos', () => {
  it('sets the correct default data', () => {
    expect(typeof Todos.data).to.equal('function')
    const defaultData = Todos.data()
    expect(defaultData.newTodo).to.equal('')
    expect(defaultData.showNewTodoInput).to.equal(false)
  })
  // TODO:test if a new todo button is displayed
  // it('contains add todo button', () => {
  //   const Constructor = Vue.extend(Todos)
  //   const TodoComponent = new Constructor().$mount()
  //   expect(TodoComponent).to.contain('Add')
  // })
  // TODO: test click on new todo button will update "showNewTodoInput"
  // TODO: test a list is rendered with given Todos
  // TODO: test text color is different from background-color
  // TODO: test user first and last name is displayed when loggedin
})
