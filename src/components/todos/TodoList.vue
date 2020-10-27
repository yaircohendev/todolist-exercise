<template>
  <div class="container">
    <TodoListMenu />
    <TodoListItems :todos="todos" @delete-todo="deleteTodo" />
    <TodoListAdd @add-todo="addTodo" />
  </div>
</template>

<script>
import TodoListMenu from "@/components/todos/TodoListMenu";
import TodoListItems from "@/components/todos/TodoListItems";
import TodoListAdd from "@/components/todos/TodoListAdd";
export default {
  name: "TodoList",
  components: { TodoListAdd, TodoListItems, TodoListMenu },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(todoName) {
      const newTodo = {
        id: Math.random(),
        name: todoName,
        isDone: false,
        createdTime: new Date()
      };
      this.todos = [...this.todos, newTodo];
    }
  },
  created() {
    this.todos = [
      {
        id: Math.random(),
        name: "1!",
        isDone: true,
        createdTime: new Date()
      },
      {
        id: Math.random(),
        name: "2!",
        isDone: true,
        createdTime: new Date()
      },
      {
        id: Math.random(),
        name: "3!",
        isDone: false,
        createdTime: new Date()
      }
    ];
  }
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
