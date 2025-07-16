import { ButtonColor } from "../components/BaseButton.vue";

const state = () => ({
  userName:"",
  questions: [
    {
      name: "萬萬",
      value: "agnes.kao",
      img: "/src/assets/question/img_agnes.jpeg",
      options: [
        {
          label: "萬萬",
          value: "agnes.kao",
          isCorrect: true,
          isSelected: false,
          btnColor: ButtonColor.White
        },
        { label: "貓貓", value: "cat", isCorrect: false, isSelected: false , btnColor: ButtonColor.White},
        { label: "狗狗", value: "dog", isCorrect: false, isSelected: false, btnColor: ButtonColor.White },
      ],
    },
    {
      name: "brian",
      value: "brian.chao",
      img: "/src/assets/question/img_brian.png",
      options: [
        {
          label: "baobao",
          value: "baobao",
          isCorrect: false,
          isSelected: false,
          btnColor: ButtonColor.White
        },
        {
          label: "brian",
          value: "brian.chao",
          isCorrect: true,
          isSelected: false,
          btnColor: ButtonColor.White
        },
        { label: "abc", value: "abc", isCorrect: false, isSelected: false , btnColor: ButtonColor.White},
      ],
    },
    {
      name: "enya",
      value: "enya.chen",
      img: "/src/assets/question/img_enya.jpg",
      options: [
        {
          label: "enya",
          value: "enya.chen",
          isCorrect: true,
          isSelected: false,
          btnColor: ButtonColor.White
        },
        { label: "aya", value: "aya", isCorrect: false, isSelected: false,btnColor: ButtonColor.White },
        { label: "irene", value: "irene", isCorrect: false, isSelected: false,btnColor: ButtonColor.White },
      ],
    },
    {
      name: "june",
      value: "june.wang",
      img: "/src/assets/question/img_june.jpg",
      options: [
        { label: "july", value: "july", isCorrect: false, isSelected: false,btnColor: ButtonColor.White },
        { label: "may", value: "may", isCorrect: false, isSelected: false,btnColor: ButtonColor.White },
        {
          label: "june",
          value: "june.wang",
          isCorrect: true,
          isSelected: false,
          btnColor: ButtonColor.White
        },
      ],
    },
    {
      name: "nick",
      value: "nick.chen",
      img: "/src/assets/question/img_nick.jpg",
      options: [
        { label: "nancy", value: "nancy", isCorrect: false, isSelected: false,btnColor: ButtonColor.White },
        { label: "neil", value: "neil", isCorrect: false, isSelected: false,btnColor: ButtonColor.White },
        {
          label: "nick",
          value: "nick.chen",
          isCorrect: true,
          isSelected: false,
          btnColor: ButtonColor.White
        },
      ],
    },
    {
      name: "pedro",
      value: "pedro.yang",
      img: "/src/assets/question/img_pedro.jpg",
      options: [
        { label: "pepe", value: "pepe", isCorrect: false, isSelected: false,btnColor: ButtonColor.White },
        {
          label: "pedro",
          value: "pedro.yang",
          isCorrect: true,
          isSelected: false,
          btnColor: ButtonColor.White
        },
        { label: "paul", value: "paul", isCorrect: false, isSelected: false,btnColor: ButtonColor.White },
      ],
    },
    {
      name: "steven",
      value: "steven.chen",
      img: "/src/assets/question/img_steven.jpg",
      options: [
        {
          label: "steven",
          value: "steven.chen",
          isCorrect: true,
          isSelected: false,
        },
        { label: "seven", value: "seven", isCorrect: false, isSelected: false ,btnColor: ButtonColor.White},
        { label: "sofa", value: "sofa", isCorrect: false, isSelected: false,btnColor: ButtonColor.White },
      ],
    },
    {
      name: "william",
      value: "william.lu",
      img: "/src/assets/question/img_william.jpeg",
      options: [
        {
          label: "william",
          value: "william.lu",
          isCorrect: true,
          isSelected: false,
        },
        {
          label: "walker",
          value: "walker",
          isCorrect: false,
          isSelected: false,
        },
        { label: "water", value: "water", isCorrect: false, isSelected: false ,btnColor: ButtonColor.White},
      ],
    },
  ],
});

const getters = {
  getQuestions: (state) => state.questions,
  getUserName(state) {
    return state.userName;
  },
};

const mutations = {
  setUserName(state, name) {
    state.userName = name;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};