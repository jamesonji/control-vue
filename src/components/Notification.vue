<template>
  <div class="notification-container">
    <p :class="flashType"></p>
  </div>
</template>

<script>
export default {
  name: 'notification'
}
</script>

<style>
.success{
  background-color: green
}
.error{
  color: red
}
.warning{
  background-color: amber 
}
.info{
  background-color: 
}
</style>
