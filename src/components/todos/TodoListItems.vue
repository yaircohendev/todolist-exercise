<template>
  <div class="todos">
    <div class="todo-item">
      <TodoListItem />
    </div>
  </div>
</template>

<script>
import TodoListItem from "@/components/todos/TodoListItem";
export default {
  name: "TodoListItems",
  components: { TodoListItem }
};
</script>

<style scoped lang="scss">
.todos {
  text-align: left;
  margin-top: 20px;
  padding: 24px;
}
</style>
