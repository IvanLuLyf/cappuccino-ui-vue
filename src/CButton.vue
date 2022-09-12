<template>
  <button :type="type" class="bcu btn" :class="[color,shape,{outline}]" :disabled="disabled">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: "CButton",
  props: {
    type: {type: String, default: "button"},
    color: {type: String, default: "default"},
    shape: {type: String, default: ""},
    outline: {type: Boolean},
    label: {type: String},
    disabled: {type: Boolean},
  }
}
</script>

<style scoped>

</style>
