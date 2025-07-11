<template>
  <div class="card">
    <div class="card-img">
      <img :src="src" class="card-img-top" />
    </div>
    <div class="card-body">
      <h4 v-show="ifShow">請選擇正確答案</h4>
      <div v-for="option in options" class="btns">
        <BaseButton
          :text="option.label"
          :data="option.value"
          :background-color="
            isResult
              ? option.isAns
                ? ButtonColor.Green
                : option.isAns == option.isSelected
                ? ButtonColor.White
                : ButtonColor.Red
              : currentAns === option.value
              ? ButtonColor.Green
              : ButtonColor.White
          "
          @click="onClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton, { ButtonColor } from "@/components/BaseButton.vue";

export default {
  name: "CardView",
  components: { BaseButton },
  data() {
    return {
      ButtonColor,
      currentAns: "",
      ansList: [],
      optionIndex: 0,
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
    ifShow: {
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
  },
  created() {
    this.ansList = this.$store.state.ansList;
  },
  methods: {
    onClick(e, ans) {
      if (this.currentAns == ans) {
        this.currentAns = "";
      } else {
        this.currentAns = ans;

        this.optionIndex = this.options.findIndex(
          (option) => option.value === this.currentAns
        );

        this.$store.commit("answerList/addList", {
          name: this.name,
          value: this.currentAns,
          img: this.src,
          isAns: this.options[this.optionIndex].isAns,
          options: this.options,
        });
      }
    },
  },
};
</script>

<style>
.card {
  width: 14rem;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid gainsboro;
  border-radius: 0.25rem;
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

.card-img-top {
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  margin: auto;
  display: block;
  object-fit: cover;
  object-position: center center;
}

.btns {
  margin-top: 5%;
}
</style>
