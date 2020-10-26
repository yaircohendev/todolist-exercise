<template>
  <div class="container">
    <TodoListMenu />
    <TodoListItems />
  </div>
</template>

<script>
import TodoListMenu from "@/components/todos/TodoListMenu";
import TodoListItems from "@/components/todos/TodoListItems";
export default {
  name: "TodoList",
  components: { TodoListItems, TodoListMenu }
};
</script>

<style lang="scss" scoped>
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
