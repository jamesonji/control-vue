<template>
  <div class="index-container">
    <template v-if="!signedIn">
      <input type="text" name="username" v-model="username">
      <button @click="signIn(username)">Auth User</button>
    </template>
    <template v-else>
      <Todos></Todos>
    </template>
  </div>
</template>

<script>
import Todos from './Todos.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'index',
  data () {
    return {
      username: ''
    }
  },
  components: {
    Todos
  },
  computed: {
    ...mapGetters([
      'signedIn'
    ])
  },
  methods: {
    ...mapActions([
      'signIn'
    ])
  }
}
</script>

<style scoped>
</style>
