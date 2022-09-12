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
  methods: {
    _onUpdate(evt) {
      this.$emit("update:checked", evt.target.checked);
    }
  }
}
</script>

<style scoped>

</style>
