<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: "TodoList"
};
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 250px;
  max-width: 300px;
  width: 30%;
  height: 80%;
}
</style>
