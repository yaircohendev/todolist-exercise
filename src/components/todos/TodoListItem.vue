<template>
  <div :class="[{ 'todo-done': todo.isDone }]">
    <BaseCheckbox
      v-model="todo.isDone"
      :id="todo.id"
      :label="todo.name"
      :checked="todo.isDone"
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
</style>
