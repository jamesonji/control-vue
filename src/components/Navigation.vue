<template>
  <div class="nav">
    <div class="nav-content">
      <h1>Control Todo</h1>
      <h3 v-if="signedIn">Hello {{getUser.username}} !</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getUser',      // get current user object
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
.nav-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
