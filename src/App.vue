<template>
  <div id="app">
    <el-container>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    Footer,
  }
}
</script>

<style>
body {
  background-color: #5d5d60;
  color: #FFFFFF;
}

.el-header {
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.08) !important;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
