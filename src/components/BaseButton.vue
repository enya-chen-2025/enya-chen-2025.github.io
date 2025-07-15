<template>
  <button class="button" :class="buttonBackgroundClass" @click="onClick">
    {{ text }}
  </button>
</template>
<script>
export const ButtonEvent = Object.freeze({
  Click: "click",
});

export const ButtonColor = Object.freeze({
  White: "white",
  Green: "green",
  Red: "red",
});
</script>
<script setup>
import { computed } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "",
  },

  backgroundColor: {
    type: String,
    default: ButtonColor.White,
  },

  data: {
    type: [String, Number, Object, Array],
    default: "",
  },

  btnColor: {
    type: String,
  },

  questionIndex: {
    type: Number,
  },
});

const emit = defineEmits([ButtonEvent.Click]);

function onClick(event) {
  emit(ButtonEvent.Click, event, props.data, props.questionIndex);
}

const buttonBackgroundClass = computed(() => {
  switch (props.btnColor) {
    case ButtonColor.Green:
      return "button--green";
    case ButtonColor.Red:
      return "button--red";
    case ButtonColor.White:
    default:
      return "button--white";
  }
});
</script>

<style scoped>
.button {
  width: 160px;
  border: 1px solid var(--btn-border-color);
  overflow-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.button:hover {
  border-color: var(--btn-hover-color);
}

.button--green {
  background-color: var(--btn-background-color-green);
}

.button--white {
  background-color: var(--btn-background-color-white);
}

.button--red {
  background-color: var(--btn-background-color-red);
}
</style>
