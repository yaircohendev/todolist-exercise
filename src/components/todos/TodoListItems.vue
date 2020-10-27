<template>
  <div class="todos">
    <div class="todo-item" v-for="(todo, i) of todos" :key="i">
      <TodoListItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoListItem from "@/components/todos/TodoListItem";
export default {
  name: "TodoListItems",
  components: { TodoListItem },
  props: {
    todos: {
      required: true,
      type: Array
    }
  }
};
</script>

<style scoped lang="scss">
.todos {
  text-align: left;
  margin-top: 20px;
  padding: 24px;

  .todo-item {
    margin: 20px 0;
  }
}
</style>
