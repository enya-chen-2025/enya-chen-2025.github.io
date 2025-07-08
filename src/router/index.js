import { createRouter, createWebHistory } from "vue-router";
import StartPage from "@/views/StartPage.vue";
import QuestionPage from "@/views/QuestionPage.vue";
import ResultPage from "@/views/ResultPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: StartPage,
  },
  {
    path: "/question",
    name: "Question",
    component: QuestionPage,
  },
  {
    path: "/result",
    name: "Result",
    component: ResultPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;