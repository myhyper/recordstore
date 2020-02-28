<template>
  <div>
    <Navbar/>
    <h2>App</h2>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped>
</style>
