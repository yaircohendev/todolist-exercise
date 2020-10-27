<template>
  <div :class="['todo-container', { 'todo-done': todo.isDone }]">
    <BaseCheckbox
      v-model="todo.isDone"
      :id="todo.id"
      :label="todo.name"
      :checked="todo.isDone"
    />
    <img
      src="../../assets/icons/clear-icon.svg"
      class="delete-todo"
      alt="icon"
      @click="$emit('delete-todo', todo.id)"
    />
  </div>
</template>

<script>
import BaseCheckbox from "@/components/BaseCheckbox";
export default {
  name: "TodoListItem",
  components: { BaseCheckbox },
  props: {
    todo: {
      required: true,
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
.todo-done {
  opacity: 0.6;
}

.todo-container {
  position: relative;

  .delete-todo {
    width: 20px;
    position: absolute;
    right: 0;
    opacity: 0.9;
    top: 0;
    margin-top: 1px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
