import Todos from '../../../src/components/Todos.vue'

describe('Todos', () => {
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof Todos.data).to.equal('function')
    const defaultData = Todos.data()
    expect(defaultData.newTodo).to.equal('')
    expect(defaultData.showNewTodoInput).to.equal(false)
  })
})
