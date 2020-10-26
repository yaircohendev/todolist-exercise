<template>
  <div class="container">
    <TodoListMenu />
  </div>
</template>

<script>
import TodoListMenu from "@/components/todos/TodoListMenu";
export default {
  name: "TodoList",
  components: { TodoListMenu }
};
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  margin: 20px 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  min-width: 250px;
  max-width: 350px;
  width: 80%;
  height: 80%;
}
</style>
