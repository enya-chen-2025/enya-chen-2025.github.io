<template>
  <div class="cards">
    <CardView
      v-for="card in cards"
      :key="card.value"
      :src="card.img"
      :options="card.options"
      :name="card.name"
      :ifShow="ifShow"
    />
  </div>
  <div class="button">
    <BaseButton
      :text="'submit'"
      :background-color="ButtonColor.Green"
      @click="submit"
    />
  </div>
</template>

<script>
import CardView from "@/components/CardView.vue";
import BaseButton, { ButtonColor } from "@/components/BaseButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const cards = [
  {
    name: "萬萬",
    value: "agnes.kao",
    img: "/src/assets/img_agnes.jpeg",
    options: [
      { label: "萬萬", value: "agnes.kao", isAns: true, isSelected: true },
      { label: "貓貓", value: "cat", isAns: false, isSelected: true },
      { label: "狗狗", value: "dog", isAns: false, isSelected: true },
    ],
  },
  {
    name: "brian",
    value: "brian.chao",
    img: "src/assets/img_brian.png",
    options: [
      { label: "baobao", value: "baobao", isAns: false, isSelected: true },
      { label: "brian", value: "brian.chao", isAns: true, isSelected: true },
      { label: "abc", value: "abc", isAns: false, isSelected: true },
    ],
  },
  {
    name: "enya",
    value: "enya.chen",
    img: "src/assets/img_enya.jpg",
    options: [
      { label: "enya", value: "enya.chen", isAns: true, isSelected: true },
      { label: "aya", value: "aya", isAns: false, isSelected: true },
      { label: "irene", value: "irene", isAns: false, isSelected: true },
    ],
  },
  {
    name: "june",
    value: "june.wang",
    img: "src/assets/img_june.jpg",
    options: [
      { label: "july", value: "july", isAns: false, isSelected: true },
      { label: "may", value: "may", isAns: false, isSelected: true },
      { label: "june", value: "june.wang", isAns: true, isSelected: true },
    ],
  },
  {
    name: "nick",
    value: "nick.chen",
    img: "src/assets/img_nick.jpg",
    options: [
      { label: "nancy", value: "nancy", isAns: false, isSelected: true },
      { label: "neil", value: "neil", isAns: false, isSelected: true },
      { label: "nick", value: "nick.chen", isAns: true, isSelected: true },
    ],
  },
  {
    name: "pedro",
    value: "pedro.yang",
    img: "src/assets/img_pedro.jpg",
    options: [
      { label: "pepe", value: "pepe", isAns: false, isSelected: true },
      { label: "pedro", value: "pedro.yang", isAns: true, isSelected: true },
      { label: "paul", value: "paul", isAns: false, isSelected: true },
    ],
  },
  {
    name: "steven",
    value: "steven.chen",
    img: "src/assets/img_steven.jpg",
    options: [
      { label: "steven", value: "steven.chen", isAns: true, isSelected: true },
      { label: "seven", value: "seven", isAns: false, isSelected: true },
      { label: "sofa", value: "sofa", isAns: false, isSelected: true },
    ],
  },
  {
    name: "william",
    value: "william.lu",
    img: "src/assets/img_william.jpeg",
    options: [
      { label: "william", value: "william.lu", isAns: true, isSelected: true },
      { label: "walker", value: "walker", isAns: false, isSelected: true },
      { label: "water", value: "water", isAns: false, isSelected: true },
    ],
  },
];

export default {
  name: "QuestionPage",
  components: { CardView, BaseButton },
  data() {
    return {
      cards,
      ButtonColor,
      userAns: [],
      ifShow: true,
    };
  },

  methods: {
    // fromCardData(name, value, ans, buttonCheck, img) {
    //   const newAns = { name, value, ans, buttonCheck, img };
    //   this.userAns.push({ name, value, ans, buttonCheck, img });
    //   const isExist = this.userAns.some((obj) => obj.name == name);
    //   if (isExist) {
    //     this.userAns = this.userAns.filter((obj) => obj.name !== name);
    //     this.userAns.push(newAns);
    //     console.log("user arr:", this.userAns);
    //   }
    // },
    submit() {
      console.log(this.$store.getters["answerList/getLength"]);
      if (this.$store.getters["answerList/getLength"] < 8) {
        alert("未作答完畢");
      } else {
        this.$router.push("/result");
      }
    },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
