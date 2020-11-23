<template>
  <div>
    <input
      @change="$emit('change', $event.target.checked)"
      type="checkbox"
      :id="id"
      name="check"
      :checked="checked"
    />
    <label :for="id">
      <span class="checkbox-circle"></span>
      <span :class="[{ 'checked-label': checked }]">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
$color: rgba(0, 0, 0, 0.6);

.checked-label {
  text-decoration: line-through;
}

label {
  display: inline-block;
  color: $color;
  cursor: pointer;
  position: relative;

  .checkbox-circle {
    display: inline-block;
    position: relative;
    background-color: transparent;
    width: 25px;
    height: 25px;
    transform-origin: center;
    border: 2px solid $color;
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
      background: $color;
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
      background: $color;
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
    .checkbox-circle {
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
      .checkbox-circle {
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
        .checkbox-circle {
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
