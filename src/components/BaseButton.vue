<template>
  <button
    class="button"
    :class="{
      'button--green': ButtonColor.Green === backgroundColor,
      'button--white': ButtonColor.White === backgroundColor,
      'button--red': ButtonColor.Red === backgroundColor,
    }"
    @click="onClick"
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
    type: [String, Number],
    default: "",
  },
});

const emit = defineEmits([ButtonEvent.Click]);

function onClick(event) {
  emit(ButtonEvent.Click, event, props.data);
}
</script>

<style scoped>
.button {
  width: 10rem;
  margin-top: 5px;
  border: 1px solid gainsboro;
  overflow-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.button:hover {
  border-color: #646cff;
}

.button--green {
  background-color: #9fe2bf;
}

.button--white {
  background-color: white;
}

.button--red {
  background-color: #f08080;
}
</style>
