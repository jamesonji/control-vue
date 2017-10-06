<template>
  <div class="notification-container">
    <p :class="flashType"></p>
  </div>
</template>

<script>
export default {
  name: 'notification',
  data () {
  }
}
</script>

<style>
.success{
  color: green
}
.error{
  color: red
}
</style>
