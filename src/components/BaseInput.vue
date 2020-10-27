<template>
  <div class="input-container">
    <input id="name" class="input" type="text" pattern=".+" required />
    <label class="label" for="name">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "What's your goal?"
    }
  }
};
</script>

<style scoped lang="scss">
.input-container {
  width: 100%;
  position: relative;
}
input {
  border: 0;
  border-bottom: 2px solid $primary-color;
  outline: none;
  transition: 0.2s ease-in-out;
  box-sizing: border-box;
}
label {
  top: 0;
  left: 0;
  right: 0;
  color: #616161;
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 1rem;
  cursor: text;
  transition: 0.2s ease-in-out;
  box-sizing: border-box;
}
input,
label {
  width: 100%;
  height: 3rem;
  font-size: 0.9rem;
  padding-left: 5px;
}
/* Interation */
input:valid,
input:focus {
  border-bottom: 2px solid $primary-color;
}

input:valid + label,
input:focus + label {
  color: $primary-color;
  top: -30px;
  pointer-events: none;
}
</style>
