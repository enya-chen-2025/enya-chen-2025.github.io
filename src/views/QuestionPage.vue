<template>
  <div class="cards">
    <Card
      v-for="card in questions"
      :key="card.value"
      :src="card.img"
      :isShowTitle="isShowTitle"
      :title="'請選擇正確答案'"
      :cardTooltip="'請選擇正確答案'"
    >
      <div v-for="option in card.options" class="btns" :key="option.value">
        <BaseButton
          :text="option.label"
          :data="option"
          :btnColor="option.btnColor"
          @click="onClick"
          :btnTooltip="option.label"
        />
      </div>
    </Card>
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
      <Modal
        :isShowModal="isShowModal"
        @onClose="closeModal"
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
      </Modal>
    </Transition>
  </div>
  <div>
    <Transition name="fade">
      <Modal
        :isShowModal="isShowAlert"
        @onClose="closeModal"
        :title="alertText"
      >
      </Modal>
    </Transition>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";
import BaseButton, { ButtonColor } from "@/components/BaseButton.vue";
import { ROUTE_PATH } from "@/router/routePath.js";

export default {
  name: "QuestionPage",
  components: { Card, BaseButton, Modal },
  data() {
    return {
      ButtonColor,
      userName: "",
      isShowTitle: true,
      isShowModal: false,
      isShowAlert: false,
      alertText: "",
    };
  },
  props: {
    data: {
      type: Object,
      default: "",
    },
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
      const MaxUserNameLength = 10;

      if (
        !this.userName ||
        this.userName.trim().length === 0 ||
        this.userName.length > MaxUserNameLength
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
    onClick(e, selectedOption) {
      for (const question of this.questions) {
        const options = question.options;
        const targetOption = options.find(
          (o) => o.value === selectedOption.value
        );
        if (targetOption) {
          options.forEach((opt) => {
            opt.isSelected = opt.value === selectedOption.value;
            opt.btnColor = opt.isSelected
              ? ButtonColor.Green
              : ButtonColor.White;
          });

          break;
        }
      }
    },
  },
};
</script>

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

.btns {
  margin-top: 16px;
}
</style>
