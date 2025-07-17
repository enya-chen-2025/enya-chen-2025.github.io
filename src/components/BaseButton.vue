<template>
  <button
    class="button"
    :class="buttonBackgroundClass"
    @click="onClick"
    :title="btnTooltip"
  >
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
  btnTooltip: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: ButtonColor.White,
  },
  data: {
    type: [String, Number, Object, Array, Boolean, undefined, null],
    default: "",
  },
  btnColor: {
    type: String,
    default: ButtonColor.White,
  },
  questionIndex: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits([ButtonEvent.Click]);

function onClick(event) {
  emit(ButtonEvent.Click, event, props.data);
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
  border: 1px solid var(--system-color-gray);
  overflow-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.3s ease;
}

.button:hover {
  border-color: var(--system-color-medium-slate-blue);
}

.button--green {
  background-color: var(--system-color-green);
}

.button--white {
  background-color: var(--system-color-white);
}

.button--red {
  background-color: var(--system-color-red);
}
</style>
