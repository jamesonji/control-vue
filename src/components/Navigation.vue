<template>
  <div class="nav">
    <h1>Simple ToDo</h1>
    <span v-if="signedIn">Hello {{getUser.username}} !</span>
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
