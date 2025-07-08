<template>
  <div class="radio-buttons">
    <label v-for="option in options" :key="option.value">
      <input
        type="radio"
        :value="option.value"
        :name="name"
        :checked="option.value === selected"
        @change="$emit('input', option.value)"
      />
      <!-- v-if="(key + 1) % 3 == 0" -->
      <span>{{ option.label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    selected: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      default: "radio-button",
    },
  },
};
</script>

<style>
.radio-buttons {
  display: flex;
  flex-direction: column;
  text-align: left;
}

/* input[type="radio"] {
  accent-color: #232323;
} */
</style>
