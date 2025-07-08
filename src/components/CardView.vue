<template>
  <div class="card">
    <img :src="src" class="card-img-top" />
    <div class="card-body">
      <h4>請選擇正確答案</h4>
      <RadioButton :selected="selected" :options="options" />
    </div>
  </div>
</template>

<script>
import RadioButton from "@/components/RadioButton.vue";

export default {
  name: "CardView",
  components: { RadioButton },
  props: {
    //src from Question page//
    src: {
      type: String,
      required: true,
    },
    //selected from Question page//
    selected: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    // index: {
    //   type: Number,
    //   required: true,
    // },
  },
};
</script>

<style>
.card {
  width: 14rem;
  height: 21rem;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid gainsboro;
  border-radius: 0.25rem;
}

.card-img-top {
  width: 90%;
  height: 90%;
  border-radius: 0.25rem;
  margin: auto;
  display: block;
  aspect-ratio: 1 / 1;
}
</style>
