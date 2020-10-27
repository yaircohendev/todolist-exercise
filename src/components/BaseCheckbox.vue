<template>
  <div :class="[{ 'todo-done': true }]">
    <input type="checkbox" id="check" name="check" value="" />
    <label for="check">
      <span class="checkbox"></span>
      <span :class="[{ 'todo-text-done': true }]">This is my first to do</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox"
};
</script>

<style scoped lang="scss">
$todo-color: rgba(0, 0, 0, 0.6);

.todo-text-done {
  text-decoration: line-through;
}
.todo-done {
  opacity: 0.6;
}

label {
  display: inline-block;
  color: $todo-color;
  cursor: pointer;
  position: relative;

  .checkbox {
    display: inline-block;
    position: relative;
    background-color: transparent;
    width: 25px;
    height: 25px;
    transform-origin: center;
    border: 2px solid $todo-color;
    border-radius: 50%;
    vertical-align: -6px;
    margin-right: 10px;
    transition: background-color 150ms 200ms,
      transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89);

    &:before {
      content: "";
      width: 0px;
      height: 2px;
      border-radius: 2px;
      background: $todo-color;
      position: absolute;
      transform: rotate(45deg);
      top: 11px;
      left: 7.4px;
      transition: width 50ms ease 50ms;
      transform-origin: 0% 0%;
    }

    &:after {
      content: "";
      width: 0;
      height: 2px;
      border-radius: 2px;
      background: $todo-color;
      position: absolute;
      transform: rotate(305deg);
      top: 15px;
      left: 8.4px;
      transition: width 50ms ease;
      transform-origin: 0% 0%;
    }
  }

  // Time to add some life to it

  &:hover {
    .checkbox {
      &:before {
        width: 5px;
        transition: width 100ms ease;
      }

      &:after {
        width: 10px;
        transition: width 150ms ease 100ms;
      }
    }
  }
}

input[type="checkbox"] {
  display: none;

  &:checked {
    + label {
      .checkbox {
        background-color: #fff;

        &:after {
          width: 10px;
          background: $primary-color;
          transition: width 150ms ease 100ms;
        }

        &:before {
          width: 5px;
          background: $primary-color;
          transition: width 150ms ease 100ms;
        }
      }

      &:hover {
        .checkbox {
          background-color: #fff;
          transform: scale(1);

          &:after {
            width: 10px;
            background: $primary-color;
            transition: width 150ms ease 100ms;
          }

          &:before {
            width: 5px;
            background: $primary-color;
            transition: width 150ms ease 100ms;
          }
        }
      }
    }
  }
}
</style>
