<template>
  <div class="menu">
    <div class="menu-item">
      <img src="../../assets/icons/todos.svg" alt="icon" class="icon" />
    </div>
    <div class="menu-item inactive-menu-item">
      <img src="../../assets/icons/checkmark.svg" alt="icon" class="icon" />
    </div>
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

  .menu-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:first-child {
      border-top-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
    }
  }

  .inactive-menu-item {
    filter: grayscale(100%);
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    opacity: 0.4;
  }

  .icon {
    width: 42px;
    color: rgba(0, 0, 0, 0.2);
  }
}
</style>
