<template>
  <div id="app">
    <div class="title">
      <h1>My Todos</h1>
    </div>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/todos/TodoList";
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
  background-color: #a4508b;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
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
