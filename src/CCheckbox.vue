<template>
  <label class="bcu checkbox" :class="[color,shape,{outline}]">
    <input type="checkbox" :disabled="disabled" :checked="checked" @change="_onUpdate">
    <span class="bcu-handler"><slot>{{ label }}</slot></span>
  </label>
</template>

<script>
export default {
  name: "CCheckbox",
  props: {
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
