// import Vue from 'vue'
import Index from '../../../src/components/Index.vue'

describe('Index', () => {
  it('sets the correct default data', () => {
    expect(typeof Index.data).to.equal('function')
    const defaultData = Index.data()
    expect(defaultData.username).to.equal('')
  })
  // TODO: test header contains 'Control Todo'
  // TODO: test if username input field exists
  // TODO: test login button exits
  // TODO: test text color is different from background
})

