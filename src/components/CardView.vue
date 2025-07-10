<template>
  <div class="card">
    <div class="card-img">
      <img :src="src" class="card-img-top" />
    </div>
    <div v-show="ifShow" class="card-body">
      <h4>請選擇正確答案</h4>
    </div>
    <div v-for="option in options">
      <BaseButton
        :text="option.value"
        :data="option.value"
        :background-color="
          currentAns === option.value ? ButtonColor.White : ButtonColor.Green
        "
        @click="onClick"
      />
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
    // from Question page//
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
        console.log("index:", this.optionIndex);

        this.$store.commit("answerList/addList", {
          value: this.currentAns,
          img: this.src,
          label: this.options[this.optionIndex].label,
          isAns: this.options[this.optionIndex].isAns,
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
}

.card-img {
  aspect-ratio: 1/1;
  width: 100%;
  height: 240px;
  overflow: hidden;
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
</style>
