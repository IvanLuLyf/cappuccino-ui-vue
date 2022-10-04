<template>
  <label class="bcu radio" :class="[color,shape,{outline}]">
    <input type="radio" :name="name" :disabled="disabled" :checked="checked" @change="_onUpdate">
    <span class="bcu-handler"><slot>{{ label }}</slot></span>
  </label>
</template>

<script>
export default {
  name: "CRadio",
  props: {
    name: {type: String},
    color: {type: String, default: "default"},
    shape: {type: String, default: ""},
    outline: {type: Boolean},
    checked: {type: Boolean},
    label: {type: String},
    disabled: {type: Boolean},
  },
  setup(props, {emit}) {
    const _onUpdate = (evt) => emit("update:checked", evt.target.checked);
    return {_onUpdate};
  },
}
</script>

<style scoped>

</style>
