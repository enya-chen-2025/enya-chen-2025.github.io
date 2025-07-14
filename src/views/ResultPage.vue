<template>
  <div>
    <div class="all-correct" v-show="score == 8">
      <p>\ 恭喜全部答對 /</p>
    </div>
    <div class="check-rank">
      <BaseButton
        :text="'查看分數&排行'"
        :background-color="ButtonColor.White"
        @click="openModal"
      />
    </div>
    <div>
      <Transition name="fade">
        <ModalView :show="showModal" @close="closeModal" :titleText="'Ranking'">
          <p v-if="userName">{{ userName }} 的分數：{{ score }}/8</p>
          <div
            v-for="(rank, index) in rankList.slice(0, 10)"
            :key="rank.name"
            class="modal-list"
          >
            <h3>
              {{ index + 1 }}
            </h3>
            <h4>
              {{ rank.name }}
            </h4>
            <h4>{{ rank.value }}分</h4>
          </div>
        </ModalView>
      </Transition>
    </div>
  </div>
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
    this.userName = this.$store.getters["answerList/getUserName"];
    this.userAns = this.$store.getters["answerList/getWrongAns"];

    this.score = this.$store.getters["answerList/getScore"];
    const key = `user-${this.userName}`;
    if (localStorage.getItem(key)) {
      const ifOverwrite = confirm("使用者名稱已存在，確認覆蓋舊成績嗎？");
      if (!ifOverwrite) return;
    }
    localStorage.setItem("user-" + this.userName, this.score);

    this.rankList = this.$store.getters["answerList/getLocalStorage"];
    console.log(this.rankList);
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

.modal-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.modal-list > * {
  margin-block-start: 0;
  margin-block-end: 0;
}

.rank-list {
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
}
</style>
