<template>
  <div class="cards">
    <CardView v-for="img in images" :src="img" :options="options" />
    <!-- <CardView
      v-for="(ops, index) in options"
      :key="ops"
      :src="img"
      :options="options"
    /> -->
  </div>
</template>

<script>
import CardView from "@/components/CardView.vue";

// 把obj的value轉arr
const images = Object.values(
  import.meta.glob("/src/assets/*.{png,jpg,jpeg}", {
    eager: true,
    import: "default",
  })
);

export default {
  name: "QuestionPage",
  components: { CardView },
  data() {
    return {
      images,
      options: [
        { label: "萬", value: "萬" },
        { label: "貓", value: "貓" },
        { label: "狗", value: "狗" },
        // question1,
        // question2,
        // question3,
      ],
    };
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
