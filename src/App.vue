<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/TodoList";
export default {
  name: "App",
  components: { TodoList }
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
  background-color: #bd4f6c;
  background-image: linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
