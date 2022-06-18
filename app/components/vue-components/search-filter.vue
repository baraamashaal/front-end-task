<template>
  <div class="">
    <input type="text" :value="value" @input="handleInput($event.target.value)"/>
    <button class="c-button c-button-sm" @click="handleInput()">
      Clear
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchFilterComponent",
  props: ['value'],
  methods: {
    handleInput(value = '') {
      this.$emit('input', value)
    }
  }
}
</script>
