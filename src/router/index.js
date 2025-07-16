import { createRouter, createWebHistory } from "vue-router";
import StartPage from "@/views/StartPage.vue";
import QuestionPage from "@/views/QuestionPage.vue";
import ResultPage from "@/views/ResultPage.vue";
import {ROUTE_PATH} from "@/router/routePath.js"

const routes = [
  {
    path: ROUTE_PATH.HOME,
    name: "Home",
    component: StartPage,
  },
  {
    path: ROUTE_PATH.QUESTION,
    name: "Question",
    component: QuestionPage,
  },
  {
    path: ROUTE_PATH.RESULT,
    name: "Result",
    component: ResultPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;