<template>
  <label class="bcu switch" :class="[color,shape,{slim}]">
    <input type="checkbox" :disabled="disabled" :checked="checked" @change="_onUpdate">
    <span class="bcu-handler"><slot>{{ label }}</slot></span>
  </label>
</template>

<script>
export default {
  name: "CSwitch",
  props: {
    color: {type: String, default: "default"},
    shape: {type: String, default: ""},
    slim: {type: Boolean},
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
