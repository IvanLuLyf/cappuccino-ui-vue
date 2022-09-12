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
  methods: {
    _onUpdate(evt) {
      this.$emit("update:checked", evt.target.checked);
    }
  }
}
</script>

<style scoped>

</style>
