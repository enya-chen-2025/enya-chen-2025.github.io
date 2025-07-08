<template>
  <button
    class="button"
    :class="{
        'button--green': ButtonColor.Green === backgroundColor,
        'button--white': ButtonColor.White === backgroundColor,
    }"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>
<script>
export const ButtonEvent = Object.freeze({
    Click: 'click'
})

export const ButtonColor = Object.freeze({
    White: 'white',
    Green: 'green'
})

</script>
<script setup>

const props = defineProps({
    text:{
        type:String,
        default : "",
    },

    backgroundColor: {
        type: String,
        default: ButtonColor.White
    }
})

const emit = defineEmits([ButtonEvent.Click])

function onClick(event){
   emit(ButtonEvent.Click, event)
}

</script>

<style scoped>
.button {
 width: 100%;
}

.button--green {
    background-color: aquamarine;
}

.button--white {
    background-color: white;
}

</style>
