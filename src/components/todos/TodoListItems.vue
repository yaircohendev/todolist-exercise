<template>
  <div class="todos">
    <transition-group name="flip-list" tag="div">
      <div class="todo-item" v-for="todo of sortedTodos" :key="todo.id">
        <TodoListItem
          :todo="todo"
          @delete-todo="$emit('delete-todo', $event)"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
import TodoListItem from "@/components/todos/TodoListItem";
export default {
  name: "TodoListItems",
  components: { TodoListItem },
  computed: {
    sortedTodos() {
      return [...this.todos].sort(item => (item.isDone ? +1 : -1));
    }
  },
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
.flip-list-move {
  transition: transform 0.5s;
}
</style>
