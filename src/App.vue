<template>
  <div id="app">
    <Navigation></Navigation>
    <notifications group="notification" position="top center" :width="400"/>
    <Index></Index>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Index from './components/Index.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    Navigation,
    Index
  },
  methods: {
  },
  computed: {
    ...mapState({
      queue: state => state.notify.queue
    })
  },
  watch: {
    queue: {
      handler: function (queue) {
        let queueTop = queue[queue.length - 1]
        this.$notify({ ...queueTop, group: 'notification' })
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #1c2b35;
  position: absolute;
  top:0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.notification{
  margin: 10px;
  margin-bottom: 0;
  border-radius: 3px;
  font-size: 13px;
  padding: 10px 20px;
  color: #495061;
  background: #EAF4FE;
  border: 1px solid #D4E8FD;
}
.notification.notification-title {
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 10px;
  color: #2589F3;
}
.notification.warning{
  background: #ffddc9;
  color: red;
}
.notification.success{
  background: #c5ffad;
  color: #3d7f43;
}
.notification.error{
  background: #ffb7b7;
  color: #441e1e;
}
</style>
