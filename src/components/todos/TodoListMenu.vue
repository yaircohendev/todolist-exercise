<template>
  <div class="menu">
    <img src="../../assets/icons/todos.svg" alt="icon" class="icon" />
  </div>
</template>

<script>
export default {
  name: "TodoListMenu"
};
</script>

<style scoped lang="scss">
.menu {
  height: 15%;
  display: flex;
  align-items: center;
  width: 100%;
  filter: grayscale(100%);
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  opacity: 0.4;
  justify-content: center;
  cursor: pointer;
}

.icon {
  width: 42px;
  color: rgba(0, 0, 0, 0.2);
}
</style>
