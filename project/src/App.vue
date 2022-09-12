<template>
  <div id="app">
    <NavBar class="nav"></NavBar>
    <router-view/>
  </div>
</template>


<script>
  import "./assets/scss/main.scss";  
  import NavBar from "./components/NavBar.vue";
  export default {
    name: 'App',
    components: {
      NavBar,
  }
  }
  </script>

<style lang="scss">
*{
  margin:0px;
  padding:0px;
}

</style>
