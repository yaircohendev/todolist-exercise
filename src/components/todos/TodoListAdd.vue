<template>
  <div class="add-todo">
    <BaseInput />
    <img src="../../assets/icons/plus-icon.svg" alt="icon" class="plus-icon" />
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
export default {
  name: "TodoListAdd",
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
