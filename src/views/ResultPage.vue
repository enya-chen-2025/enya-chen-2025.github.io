<template>
  <div>
    <div class="user-info">
      <p v-if="userName">
        {{ userName }} 的分數：{{ score }}/{{ questions.length }}
      </p>
      <p v-if="score == questions.length">恭喜 {{ userName }} 全部答對🎉</p>
    </div>
    <div class="table-style">
      <table class="table" title="ranking list">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in records.slice(0, 10)" :key="record">
            <th scope="row">{{ index + 1 }}</th>
            <td v-for="r in record" :key="r.name">
              {{ r }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cards">
      <Card
        v-for="card in wrongList"
        :key="card.value"
        :src="card.img"
        :isShowTitle="isShowTitle"
      >
        <div v-for="option in card.options" class="btns" :key="option.value">
          <BaseButton
            :text="option.label"
            :data="option"
            :btnColor="option.btnColor"
            :btnTooltip="option.isCorrect"
          />
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import BaseButton, { ButtonColor } from "@/components/BaseButton.vue";
import questions from "@/store/questions";

export default {
  name: "QuestionPage",
  components: { Card, BaseButton },
  data() {
    return {
      isShowTitle: false,
      isShowModal: false,
      ButtonColor,
      userName: "",
    };
  },
  created() {
    this.userName = this.$store.getters["questions/getUserName"];

    this.questions.forEach((question) => {
      question.options.forEach((option) => {
        if (option.isCorrect && !option.isSelected) {
          option.btnColor = ButtonColor.Green;
        } else if (!option.isCorrect && option.isSelected) {
          option.btnColor = ButtonColor.Red;
        }
      });
    });

    this.setRecords();
  },
  computed: {
    questions() {
      return this.$store.getters["questions/getQuestions"];
    },
    score() {
      return this.questions.reduce((total, question) => {
        return (
          total +
          question.options.filter((opt) => opt.isCorrect && opt.isSelected)
            .length
        );
      }, 0);
    },
    wrongList() {
      return this.questions.filter((question) =>
        question.options.some((opt) => !opt.isCorrect && opt.isSelected)
      );
    },
    records() {
      const records = JSON.parse(localStorage.getItem("rankingData")) || [];
      return records.map((record) => {
        return {
          ...record,
          time: new Date(record.time).toDateString(),
        };
      });
    },
  },
  methods: {
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    setRecords() {
      if (this.userName) {
        const newRecord = {
          userName: this.userName,
          score: this.score,
          time: Date.now(),
        };

        const records = JSON.parse(localStorage.getItem("rankingData")) || [];

        const existingIndex = records.findIndex(
          (r) => r.userName === newRecord.userName
        );
        if (existingIndex != -1) {
          records[existingIndex] = newRecord;
        } else {
          records.push(newRecord);
        }

        records.sort((a, b) => {
          if (b.score !== a.score) {
            return b.score - a.score;
          } else {
            return b.time - a.time;
          }
        });

        localStorage.setItem("rankingData", JSON.stringify(records));
      }
    },
  },
};
</script>

<style scoped>
.user-info {
  margin-bottom: 16px;
}

table {
  border-collapse: collapse;
}

th {
  width: 80px;
  padding: 5px;
  text-align: left;
  margin-left: 8px;
  border-bottom: 1px solid var(--system-color-gray);
  overflow-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

td {
  width: 130px;
  padding: 5px;
  text-align: left;
  margin-left: 12px;
  border-bottom: 1px solid var(--system-color-gray);
  overflow-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.table-style {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
