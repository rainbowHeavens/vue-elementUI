<template>
  <div id="app">
    <MainContent/>
  </div>
</template>

<script>
import MainContent from './components/Main'

export default {
  name: 'App',
  components: {
    MainContent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
