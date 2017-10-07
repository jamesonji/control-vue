import Vue from 'vue'
import Index from '../../../src/components/Index.vue'

describe('Index', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof Index.created).toBe('function')
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof Index.data).toBe('function')
    const defaultData = Index.data()
    expect(defaultData.username).toBe('')
  })
  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    const vm = new Vue(Index).$mount()
    expect(vm.username).toBe('')
  })
})
