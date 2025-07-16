<template>
  <div class="cards">
    <CardView
      v-for="(card, index) in questions"
      :key="card.value"
      :src="card.img"
      :name="card.name"
      :isShowTitle="isShowTitle"
      :title="'請選擇正確答案'"
      :options="getUpdatedOptions(card.options)"
      :questionIndex="index"
      @optionClick="onClick"
      :cardTitle="'這是cardTitle'"
    />
  </div>
  <div class="button">
    <BaseButton
      :text="'submit'"
      :background-color="ButtonColor.White"
      @click="submit"
      class="btn-submit"
    />
  </div>
  <div>
    <Transition name="fade">
      <ModalView
        :isShowModal="isShowModal"
        @close="closeModal"
        :title="'請輸入使用者名稱'"
      >
        <input v-model="userName" class="input-name" />
        <br />
        <BaseButton
          :text="'submit'"
          :background-color="ButtonColor.White"
          @click="submitName"
          class="btn-submit-name"
        />
      </ModalView>
    </Transition>
    <Transition name="fade">
      <ModalView
        :isShowModal="isShowAlert"
        @close="closeModal"
        :title="alertText"
      >
      </ModalView>
    </Transition>
  </div>
</template>

<script>
import CardView from "@/components/CardView.vue";
import ModalView from "@/components/ModalView.vue";
import BaseButton, { ButtonColor } from "@/components/BaseButton.vue";
import { ROUTE_PATH } from "@/router/routePath.js";

export default {
  name: "QuestionPage",
  components: { CardView, BaseButton, ModalView },
  data() {
    return {
      ButtonColor,
      userAns: [],
      isShowTitle: true,
      rank: [],
      userName: "",
      isShowModal: false,
      currentAns: "",
      isShowAlert: false,
      alertText: "",
    };
  },
  computed: {
    questions() {
      return this.$store.getters["questions/getQuestions"];
    },
    selectedCount() {
      return this.questions.reduce((total, question) => {
        return total + question.options.filter((opt) => opt.isSelected).length;
      }, 0);
    },
  },
  methods: {
    closeModal() {
      this.isShowModal = false;
      this.isShowAlert = false;
    },
    submit() {
      if (this.selectedCount < this.questions.length) {
        this.alertText = "未作答完畢";
        this.isShowAlert = true;
      } else {
        this.isShowModal = true;
      }
    },
    submitName() {
      const maxUserNameLength = 10;

      if (
        !this.userName ||
        this.userName.trim().length == 0 ||
        this.userName.length > maxUserNameLength
      ) {
        this.alertText = "名稱字數不能超過10 且不能空白";
        this.isShowModal = false;
        this.isShowAlert = true;

        return;
      }
      this.isShowModal = false;
      this.$store.commit("questions/setUserName", this.userName);
      this.$router.push(ROUTE_PATH.RESULT);
    },
    getUpdatedOptions(options) {
      const updated = options.map((opt) => {
        return {
          ...opt,
          isSelected: this.currentAns == opt.value,
        };
      });
      return updated;
    },

    onClick(e, ans, questionIndex) {
      const options = this.questions[questionIndex].options;
      options.forEach((o) => {
        o.isSelected = false;
        o.btnColor = ButtonColor.White;
      });
      if (this.currentAns == ans) {
        this.currentAns = "";
      } else {
        this.currentAns = ans;

        const selectedOption = options.find((o) => o.value == this.currentAns);
        if (selectedOption) {
          selectedOption.isSelected = true;
          selectedOption.btnColor = ButtonColor.Green;
        }
      }
    },
  },
};
</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}
</style>

<style scoped>
.btn-submit {
  margin-top: 20px;
}

.input-name {
  width: 150px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid black;
}

.btn-submit-name {
  width: fit-content;
  margin-top: 20px;
}
</style>
