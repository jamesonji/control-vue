<template>
  <div class="hello">
    <p>{{msg}}</p>
    <button @click="signIn('Bret')">Auth User</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'index',
  data () {
    return {
      msg: 'Login to use our app'
    }
  },
  computed: {
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
