<template>
  <input
      :type="type"
      class="bcu input"
      :class="[color,shape,{outline}]"
      :value="value"
      :placeholder="placeholder"
      @input="_onUpdate"
  />
</template>

<script>
export default {
  name: "CInput",
  props: {
    type: {type: String, default: "text"},
    color: {type: String, default: "default"},
    shape: {type: String, default: ""},
    outline: {type: Boolean},
    disabled: {type: Boolean},
    placeholder: {type: String},
    value: {type: String},
  },
  setup(props, {emit}) {
    const _onUpdate = (evt) => emit("update:value", evt.target.value);
    return {_onUpdate};
  }
}
</script>

<style scoped>

</style>
