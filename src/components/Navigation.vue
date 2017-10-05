<template>
  <div class="nav">
    <h1>Simple ToDo</h1>
    <template v-if="signedIn">
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
      'getUser',      // get current user
      'signedIn'      // get current signedIn Status
    ])
  },
  methods: {
    ...mapActions([
      'signOut'       // sign out user
    ])
  }
}
</script>

<style scoped>
</style>
