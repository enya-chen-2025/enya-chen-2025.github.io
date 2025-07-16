<template>
  <div class="card">
    <div class="card-img">
      <img :src="src" class="card-img-top" />
    </div>
    <div class="card-body">
      <h4 v-show="isShowTitle" class="card-title" :title="cardTitle">
        {{ title }}
      </h4>
      <div v-for="option in options" class="btns">
        <BaseButton
          :text="option.label"
          :data="option.value"
          :btnColor="option.btnColor"
          :questionIndex="questionIndex"
          @click="onClick"
          :btnTitle="option.label"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton, { ButtonColor } from "./BaseButton.vue";

export default {
  name: "CardView",
  components: { BaseButton },
  data() {
    return {
      ButtonColor,
      currentAns: "",
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cardTitle: {
      type: String,
    },
    isShowTitle: {
      type: Boolean,
      required: true,
    },
    text: {
      type: String,
    },
    data: {
      type: String,
    },
    isResult: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    questionIndex: {
      type: Number,
    },
  },
  methods: {
    onClick(e, value, questionIndex) {
      return this.$emit("optionClick", e, value, questionIndex);
    },
  },
};
</script>

<style>
.card {
  width: 240px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid var(--btn-border-color);
  border-radius: 8px;
  overflow: hidden;
}

.card-img {
  aspect-ratio: 1/1;
  width: 100%;
  height: 240px;
  overflow: hidden;
  margin-bottom: 5px;
}

.card-img img {
  transition: all 0.3s ease-in-out;
}

.card-img:hover img {
  transform: scale(1.25);
}

.card-title {
  overflow-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-img-top {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin: auto;
  display: block;
  object-fit: cover;
  object-position: center center;
}

.btns {
  margin-top: 16px;
}
</style>
