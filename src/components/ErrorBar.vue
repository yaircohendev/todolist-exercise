<template>
  <div class="error-bar" v-if="errors.length">
    <span v-for="(error, i) of errors" :key="i">
      {{ error }}
      {{ i !== errors.length - 1 ? "," : null }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ErrorBar",
  props: {
    errors: {
      required: true,
      type: Array
    }
  }
};
</script>

<style scoped>
.error-bar {
  padding: 8px;
  background-color: #e75d5d;
  display: flex;
  opacity: 0.9;
  flex-direction: column;
  color: #fff;
  margin: 10px 0;
  font-size: 0.9rem;
  border-radius: 4px;
}
</style>
