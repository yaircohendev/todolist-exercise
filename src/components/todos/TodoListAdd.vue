<template>
  <div class="add-todo">
    <BaseInput ref="inputComponent" v-model="todoName" />
    <img
      src="../../assets/icons/plus-icon.svg"
      alt="icon"
      class="plus-icon"
      @click="addTodo"
    />
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
export default {
  name: "TodoListAdd",
  data() {
    return {
      todoName: ""
    };
  },
  methods: {
    addTodo() {
      if (!this.todoName) return;
      this.$emit("add-todo", this.todoName);
      this.todoName = "";
      this.$refs.inputComponent.$refs.baseInput.value = "";
    }
  },
  components: { BaseInput }
};
</script>

<style scoped lang="scss">
.add-todo {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  .plus-icon {
    cursor: pointer;
    width: 40px;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
