<template>
  <div class="nav">
    <h3 class="profile" v-if="signedIn">
      Hello! {{getUser.name}}.
    </h3>
    <div class="brand">
      <h1>Control Todo</h1>
      <h3 v-if="signedIn">Click todo item to toggle them!</h3>
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
h1{
  color: white;
  font-size: 60px;
}
h3{
  color: white;
}
.profile{
  position: absolute;
  top: 5px;
  right: 20px;
}
.brand{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
