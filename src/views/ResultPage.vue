<template>
  <div>
    <div class="check-rank">
      <BaseButton
        :text="'查看排行榜'"
        :background-color="ButtonColor.White"
        @click="openModal"
      />
    </div>
    <ModalView :show="showModal" @close="closeModal">
      <div v-for="(rank, index) in rankList.slice(0, 10)" :key="rank.name">
        <p class="modal-p">{{ rank.name }} 的分數：{{ rank.value }}</p>
      </div>
    </ModalView>
  </div>
  <!-- <p>{{ userName }} 的分數：{{ score }}/8</p> -->
  <div class="cards">
    <CardView
      v-for="ans in userAns"
      :src="ans.img"
      :ifShow="ifShow"
      :options="ans.options"
      :name="ans.name"
      :isResult="true"
    />
  </div>
</template>

<script>
import CardView from "@/components/CardView.vue";
import ModalView from "../components/ModalView.vue";
import BaseButton, { ButtonColor } from "@/components/BaseButton.vue";

export default {
  name: "QuestionPage",
  components: { CardView, ModalView, BaseButton },
  data() {
    return {
      userAns: [],
      score: 0,
      ifShow: false,
      userName: "",
      rankList: [],
      showModal: false,
      ButtonColor,
    };
  },
  created() {
    this.userAns = this.$store.getters["answerList/getWrongAns"];
    this.userName = window.prompt("請輸入你的名字：");
    this.score = this.$store.getters["answerList/getScore"](this.userName);
    this.rankList = this.$store.getters["answerList/getLocalStorage"];
    console.log(this.userAns);
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      console.log("modal close...");
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.check-rank {
  margin-bottom: 50px;
}

.modal-p {
  overflow-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
