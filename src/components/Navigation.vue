<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/todos" v-if="!signedIn">Login</router-link>
    <template v-else>
      <span>Hello {{getUser.username}} !</span>
      <button @click="signOut">Log Out</button>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getUser',
      'signedIn'
    ])
  },
  methods: {
    ...mapActions([
      'signOut'
    ])
  }
}
</script>

<style scoped>
</style>
