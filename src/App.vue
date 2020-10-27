<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
body {
  background-color: $primary-color;
  background-image: linear-gradient(315deg, $primary-color 0%, #b279a7 74%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.title {
  margin-top: 30px;
  color: #fff;
}
</style>
