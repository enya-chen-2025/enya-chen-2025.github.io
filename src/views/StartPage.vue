<template>
  <div>
    <p>你認識 vipop b team 的成員嗎？ 快來確認一下吧！</p>
    <BaseButton
      :text="'開始作答'"
      :background-color="ButtonColor.White"
      @click="nextPage"
    />
    <router-view />
  </div>
</template>

<script setup>
import BaseButton, { ButtonColor } from "../components/BaseButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function nextPage(event) {
  router.push("/question");
}
</script>

<style scoped></style>
